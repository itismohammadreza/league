export interface IPlayer {
  name: string;
  match_played: number;
  win: number;
  draw: number;
  lose: number;
  gf: number;
  ga: number;
  matches: IMatchItem[]
}

export interface IMatchItem {
  against: string;
  result: string;
  guest: boolean
}

export class Player {
  name: string;
  match_played: number;
  win: number;
  draw: number;
  lose: number;
  gf: number;  // gole zade
  ga: number;  // gole khorde
  gd: string;  // tafazol gol
  point: number;
  matches: IMatchItem[];

  constructor(rank: IPlayer) {
    this.name = rank.name;
    this.match_played = rank.match_played;
    this.win = rank.win;
    this.draw = rank.draw;
    this.lose = rank.lose;
    this.gf = rank.gf;
    this.ga = rank.ga;
    this.gd = (this.gf - this.ga) > 0 ? `+${this.gf - this.ga}` : (this.gf - this.ga).toString();
    this.point = (this.win * 3) + (this.draw);
    this.matches = rank.matches;
  }
}
