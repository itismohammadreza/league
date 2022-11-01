import {Component} from '@angular/core';
import {IMatch, IPlayer, IRank} from "../models";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-league',
  templateUrl: './league.page.html',
  styleUrls: ['./league.page.scss']
})
export class LeaguePage {
  constructor(private http: HttpClient) {
  }

  matches: IMatch[] = [];
  players: IPlayer[] = [];
  ranks: IRank[] = []
  //   = (JSON.parse(JSON.stringify(this.data)) as Player[]).sort((a, b) => {
  //   if (a.point > b.point) {
  //     return -1
  //   } else if (a.point < b.point) {
  //     return 1
  //   } else if (a.point == b.point) {
  //     if (+a.gd > +b.gd) {
  //       return -1
  //     } else {
  //       return 1
  //     }
  //   }
  //   return 0
  // });

  ngOnInit() {
    this.loadData()
  }

  async loadData() {
    this.matches = await this.http.get<IMatch[]>('http://tournament.league23.ir/matches/').toPromise() || [];
    this.players = await this.http.get<IPlayer[]>('http://tournament.league23.ir/players/').toPromise() || [];
    this.getRanks()
  }

  getRanks() {
    this.players.forEach(p => {
      const playerMatches = this.matches.filter(m => m.player1.id == p.id || m.player2.id == p.id);
      const isWinner = m => (m.winner == 'Player1' && m.player1.id == p.id) || (m.winner == 'Player2' && m.player2.id == p.id);
      const isDraw = m => (m.winner == null && m.ga != null);
      const isLoser = m => (m.winner == 'Player1' && m.player2.id == p.id) || (m.winner == 'Player2' && m.player1.id == p.id);
      const matchPlayed = playerMatches.length;
      const win = playerMatches.filter(isWinner).length;
      const draw = playerMatches.filter(isDraw).length;
      const lose = playerMatches.filter(isLoser).length;
      const gf = playerMatches.map(m => isWinner(m) ? m.gf : m.ga).reduce((a, b) => a + b, 0);
      console.log(p.name, playerMatches.map(m => isWinner(m) ? m.gf : m.ga))
      console.log(p.name, playerMatches.map(m => isLoser(m) ? m.ga : m.gf))
      const ga = playerMatches.map(m => isLoser(m) ? m.gf : m.ga).reduce((a, b) => a + b, 0);
      const gd = (gf - ga) > 0 ? `+${gf - ga}` : (gf - ga).toString();
      const point = (win * 3) + draw;
      this.ranks.push({
        ...p,
        matchPlayed,
        win,
        draw,
        lose,
        gf,
        ga,
        gd,
        point,
      })
    })
  }

  getPlayerMatches(player: IPlayer, rowIndex: number) {
    const matches: IMatch[] = [];
    for (let i = 0; i < this.players.length; i++) {
      const matchData = this.matches.find(m => m.player1.id == player.id && m.player2.id == this.players[i].id)
      const matchItem: IMatch = {
        player1: player,
        player2: this.players[i],
        date: matchData?.date || '',
        winner: matchData?.winner || null,
        ga: matchData?.ga || null,
        gf: matchData?.gf || null,
      }
      matches.push(matchItem)
    }
    // const matches = this.matches.find(p => p.name == player.name)!.matches;
    // const isGuestMatch = matches.filter(m => m.guest);
    // const isNotGuestMatch = matches.filter(m => !m.guest);
    // for (let i = 0; i < rowIndex; i++) {
    //   result.push(isGuestMatch[i])
    // }
    // result[rowIndex] = {
    //   against: player.name,
    //   result: '',
    //   guest: false
    // }
    // for (let i = rowIndex; i < isNotGuestMatch.length; i++) {
    //   result.push(isNotGuestMatch[i])
    // }
    // return result;
    return matches
  }

  getMatchResult(match: IMatch) {
    if (match.player1.id == match.player2.id || !match.winner) {
      return '';
    }
    return `${match.gf}-${match.ga}`
  }
}
