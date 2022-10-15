import {Ranking} from "./models";

const AliRn = new Ranking({
  name: 'AliRn',
  match_played: 1,
  win: 1,
  draw: 0,
  lose: 0,
  gf: 3,
  ga: 0,
})

const MohammadReza = new Ranking({
  name: 'MohammadReza',
  match_played: 3,
  win: 2,
  draw: 1,
  lose: 0,
  gf: 5,
  ga: 2,
})

const Behnam = new Ranking({
  name: 'Behnam',
  match_played: 1,
  win: 0,
  draw: 1,
  lose: 0,
  gf: 1,
  ga: 1,
})

const AliReza = new Ranking({
  name: 'AliReza-D',
  match_played: 2,
  win: 1,
  draw: 0,
  lose: 1,
  gf: 2,
  ga: 3,
})

const AliReza_D = new Ranking({
  name: 'AliReza-D',
  match_played: 0,
  win: 0,
  draw: 0,
  lose: 0,
  gf: 0,
  ga: 0,
})

const Reza = new Ranking({
  name: 'Reza',
  match_played: 3,
  win: 0,
  draw: 0,
  lose: 3,
  gf: 2,
  ga: 7,
})

export const Rankings = [AliRn, MohammadReza, Behnam, AliReza_D, AliReza, Reza];
