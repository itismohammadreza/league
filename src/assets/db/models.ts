interface IRanking {
  name: string;
  match_played: number;
  win: number;
  draw: number;
  lose: number;
  gf: number;
  ga: number;
  gd: number;
  point: number;
}

export class Ranking {
  name: string;
  match_played: number;
  win: number;
  draw: number;
  lose: number;
  gf: number;
  ga: number;
  gd: number;
  point: number;

  constructor(rank: IRanking) {
    this.name = rank.name;
    this.match_played = rank.match_played;
    this.win = rank.win;
    this.draw = rank.draw;
    this.lose = rank.lose;
    this.gf = rank.gf;
    this.ga = rank.ga;
    this.gd = rank.gd;
    this.point = rank.point;
  }
}
