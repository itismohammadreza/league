interface IRanking {
  name: string;
  match_played: number;
  win: number;
  draw: number;
  lose: number;
  gf: number;
  ga: number;
}

export class Ranking {
  name: string;
  match_played: number;
  win: number;
  draw: number;
  lose: number;
  gf: number;  // gole zade
  ga: number;  // gole khorde
  gd: string;  // tafazol gol
  point: number;

  constructor(rank: IRanking) {
    this.name = rank.name;
    this.match_played = rank.match_played;
    this.win = rank.win;
    this.draw = rank.draw;
    this.lose = rank.lose;
    this.gf = rank.gf;
    this.ga = rank.ga;
    this.gd = (this.gf - this.ga) > 0 ? `+${this.gf - this.ga}` : (this.gf - this.ga).toString();
    this.point = (this.win * 3) + (this.draw);
  }
}
