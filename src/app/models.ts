export interface Player {
  id?: number;
  flag: string;
  name: string;
  team: string
}

export interface Match {
  id?: number;
  date: string;
  ga?: number;
  gf?: number;
  player1: Player;
  player2: Player;
  winner?: "Player1" | "Player2"
}

export interface Rank {
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
