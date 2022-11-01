export interface IPlayer {
  id?: number;
  flag: string;
  name: string;
  team: string
}

export interface IMatch {
  id?: number;
  date: string;
  ga?: number;
  gf?: number;
  player1: IPlayer;
  player2: IPlayer;
  winner?: "Player1" | "Player2"
}

export interface IRank {
  name: string;
  flag: string;
  matchPlayed: number;
  win: number;
  draw: number;
  lose: number;
  gf: number;
  ga: number;
  gd: string;
  point: number;
}

export class Player {
  // name: string;
  // match_played: number;
  // win: number = 0;
  // draw: number = 0;
  // lose: number = 0;
  // gf: number = 0;  // gole zade
  // ga: number = 0;  // gole khorde
  // gd: string;  // tafazol gol
  // point: number;
  // matches: IMatchItem[];
  //
  // constructor(player: IPlayer) {
  //   this.name = player.name;
  //   this.matches = player.matches;
  //   const matchResults = this.matches.map(m => m.result);
  //   this.match_played = matchResults.filter(r => r != '-').length;
  //   matchResults.forEach(r => {
  //     if (r == '-') {
  //       return
  //     }
  //     const goalFor = +r.split('-')[0];
  //     const goalAgainst = +r.split('-')[1];
  //     this.gf += goalFor;
  //     this.ga += goalAgainst;
  //     if (goalFor > goalAgainst) {
  //       this.win += 1
  //     } else if (goalFor < goalAgainst) {
  //       this.lose += 1
  //     } else if (goalFor == goalAgainst) {
  //       this.draw += 1
  //     }
  //   })
  //   this.gd = (this.gf - this.ga) > 0 ? `+${this.gf - this.ga}` : (this.gf - this.ga).toString();
  //   this.point = (this.win * 3) + (this.draw);
  // }
}
