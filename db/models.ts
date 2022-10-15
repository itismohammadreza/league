interface IRanking {
  name: string
  match_played: number
  win: number
  draw: number
  lose: number
  gf: number
  ga: number
  gd: number
  point: number
}

class Ranking {
  name: string
  match_played: number
  win: number
  draw: number
  lose: number
  gf: number
  ga: number
  gd: number
  point: number

  constructor(x: IRanking) {
    this.name = x.name
    this.match_played = x.match_played;
    this.win = x.win
    this.draw = x.draw
    this.lose = x.lose
    this.gf = x.gf
    this.ga = x.ga
    this.gd = x.gd
    this.point = x.point
  }
}
