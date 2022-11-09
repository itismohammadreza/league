import {Component} from '@angular/core';
import {Match, Player, Rank} from "../models";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-league',
  templateUrl: './league.page.html',
  styleUrls: ['./league.page.scss']
})
export class LeaguePage {
  constructor(private http: HttpClient) {
  }

  matches: Match[] = [];
  players: Player[] = [];
  ranks: Rank[] = [];
  loading: boolean = false;

  ngOnInit() {
    this.loadData()
  }

  async loadData() {
    this.loading = true;
    this.matches = await this.http.get<Match[]>('http://tournament.league23.ir/matches/').toPromise() || [];
    this.players = await this.http.get<Player[]>('http://tournament.league23.ir/players/').toPromise() || [];
    this.loading = false;
    this.getRanks()
  }

  getRanks() {
    this.players.forEach(p => {
      const playerMatches = this.matches.filter(m => m.player1.id == p.id || m.player2.id == p.id);
      const isWinner = m => (m.winner == 'Player1' && m.player1.id == p.id) || (m.winner == 'Player2' && m.player2.id == p.id);
      const isDraw = m => (m.winner == null && m.ga != null && m.gf != null && m.ga == m.gf);
      const isLoser = m => (m.winner == 'Player1' && m.player2.id == p.id) || (m.winner == 'Player2' && m.player1.id == p.id);
      const matchPlayed = playerMatches.length;
      const win = playerMatches.filter(isWinner).length;
      const draw = playerMatches.filter(isDraw).length;
      const lose = playerMatches.filter(isLoser).length;
      const gfMap = [...playerMatches.filter(isWinner).map(m => m.gf), ...playerMatches.filter(isLoser).map(m => m.ga), ...playerMatches.filter(isDraw).map(m => m.gf)]
      const gaMap = [...playerMatches.filter(isWinner).map(m => m.ga), ...playerMatches.filter(isLoser).map(m => m.gf), ...playerMatches.filter(isDraw).map(m => m.ga)]
      const gf = gfMap.reduce((a, b) => a + b, 0);
      const ga = gaMap.reduce((a, b) => a + b, 0);
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
    this.ranks.sort((a, b) => {
      if (a.point > b.point) {
        return -1
      } else if (a.point < b.point) {
        return 1
      } else if (a.point == b.point) {
        if (+a.gd > +b.gd) {
          return -1
        } else if (+a.gd < +b.gd) {
          return 1
        } else if (a.gd == b.gd) {
          if (+a.gf > +b.gf) {
            return -1
          } else if (+a.gf < +b.gf) {
            return 1
          } else if (+a.gf == +b.gf) {
            if (+a.ga > +b.ga) {
              return -1
            } else if (+a.ga < +b.ga) {
              return 1
            } else if (+a.ga == +b.ga) {
              return 1
            }
          }
        }
      }
      return 0
    });
  }

  getPlayerMatches(player: Player) {
    const matches: Match[] = [];
    for (let i = 0; i < this.players.length; i++) {
      const matchItem: any = {
        player1: player,
        player2: this.players[i],
      }
      matches.push(matchItem)
    }
    return matches;
  }

  getMatchResult(match: Match, i: number) {
    const playerIndex = this.players.findIndex(p => p.id == match.player1.id);
    if (i <= playerIndex) {
      return '';
    }
    const matchData = this.matches.find(m => (m.player1.id == match.player1.id && m.player2.id == match.player2.id));
    if (!matchData) {
      return ''
    }
    return matchData.winner == 'Player1' ? `${matchData.gf}-${matchData.ga}` : `${matchData.ga}-${matchData.gf}`;
  }
}
