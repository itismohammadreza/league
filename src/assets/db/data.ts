import {Player} from "./models";

const AliRn = new Player({
  name: 'AliRn',
  match_played: 1,
  win: 1,
  draw: 0,
  lose: 0,
  gf: 3,
  ga: 0,
  matches: [
    {
      against: 'MohammadReza',
      result: '2-4',
      guest: false
    },
    {
      against: 'Behnam',
      result: '-',
      guest: false
    },
    {
      against: 'AliReza',
      result: '-',
      guest: false
    },
    {
      against: 'AliReza_D',
      result: '-',
      guest: false
    },
    {
      against: 'Reza',
      result: '-',
      guest: false
    },
    {
      against: 'MohammadReza',
      result: '-',
      guest: true
    },
    {
      against: 'Behnam',
      result: '-',
      guest: true
    },
    {
      against: 'AliReza',
      result: '-',
      guest: true
    },
    {
      against: 'AliReza_D',
      result: '-',
      guest: true
    },
    {
      against: 'Reza',
      result: '-',
      guest: true
    },
  ]
})

const MohammadReza = new Player({
  name: 'MohammadReza',
  match_played: 3,
  win: 2,
  draw: 1,
  lose: 0,
  gf: 5,
  ga: 2,
  matches: [
    {
      against: 'AliRn',
      result: '4-2',
      guest: false
    },
    {
      against: 'Behnam',
      result: '-',
      guest: false
    },
    {
      against: 'AliReza',
      result: '-',
      guest: false
    },
    {
      against: 'AliReza_D',
      result: '-',
      guest: false
    },
    {
      against: 'Reza',
      result: '-',
      guest: false
    },
    {
      against: 'AliRn',
      result: '-',
      guest: true
    },
    {
      against: 'Behnam',
      result: '-',
      guest: true
    },
    {
      against: 'AliReza',
      result: '-',
      guest: true
    },
    {
      against: 'AliReza_D',
      result: '-',
      guest: true
    },
    {
      against: 'Reza',
      result: '-',
      guest: true
    },
  ]
})

const Behnam = new Player({
  name: 'Behnam',
  match_played: 1,
  win: 0,
  draw: 1,
  lose: 0,
  gf: 1,
  ga: 1,
  matches: [
    {
      against: 'AliRn',
      result: '-',
      guest: false
    },
    {
      against: 'MohammadReza',
      result: '-',
      guest: false
    },
    {
      against: 'AliReza',
      result: '-',
      guest: false
    },
    {
      against: 'AliReza_D',
      result: '-',
      guest: false
    },
    {
      against: 'Reza',
      result: '-',
      guest: false
    },
    {
      against: 'AliRn',
      result: '-',
      guest: true
    },
    {
      against: 'MohammadReza',
      result: '-',
      guest: true
    },
    {
      against: 'AliReza',
      result: '-',
      guest: true
    },
    {
      against: 'AliReza_D',
      result: '-',
      guest: true
    },
    {
      against: 'Reza',
      result: '-',
      guest: true
    },
  ]
})

const AliReza = new Player({
  name: 'AliReza',
  match_played: 2,
  win: 1,
  draw: 0,
  lose: 1,
  gf: 2,
  ga: 3,
  matches: [
    {
      against: 'AliRn',
      result: '-',
      guest: false
    },
    {
      against: 'MohammadReza',
      result: '-',
      guest: false
    },
    {
      against: 'Behnam',
      result: '-',
      guest: false
    },
    {
      against: 'AliReza_D',
      result: '-',
      guest: false
    },
    {
      against: 'Reza',
      result: '-',
      guest: false
    },
    {
      against: 'AliRn',
      result: '-',
      guest: true
    },
    {
      against: 'MohammadReza',
      result: '-',
      guest: true
    },
    {
      against: 'Behnam',
      result: '-',
      guest: true
    },
    {
      against: 'AliReza_D',
      result: '-',
      guest: true
    },
    {
      against: 'Reza',
      result: '-',
      guest: true
    },
  ]
})

const AliReza_D = new Player({
  name: 'AliReza-D',
  match_played: 0,
  win: 0,
  draw: 0,
  lose: 0,
  gf: 0,
  ga: 0,
  matches: [
    {
      against: 'AliRn',
      result: '-',
      guest: false
    },
    {
      against: 'MohammadReza',
      result: '-',
      guest: false
    },
    {
      against: 'Behnam',
      result: '-',
      guest: false
    },
    {
      against: 'AliReza',
      result: '-',
      guest: false
    },
    {
      against: 'Reza',
      result: '-',
      guest: false
    },
    {
      against: 'AliRn',
      result: '-',
      guest: true
    },
    {
      against: 'MohammadReza',
      result: '-',
      guest: true
    },
    {
      against: 'Behnam',
      result: '-',
      guest: true
    },
    {
      against: 'AliReza',
      result: '-',
      guest: true
    },
    {
      against: 'Reza',
      result: '-',
      guest: true
    },
  ]
})

const Reza = new Player({
  name: 'Reza',
  match_played: 3,
  win: 0,
  draw: 0,
  lose: 3,
  gf: 2,
  ga: 7,
  matches: [
    {
      against: 'AliRn',
      result: '-',
      guest: false
    },
    {
      against: 'MohammadReza',
      result: '-',
      guest: false
    },
    {
      against: 'Behnam',
      result: '-',
      guest: false
    },
    {
      against: 'AliReza',
      result: '-',
      guest: false
    },
    {
      against: 'AliReza_D',
      result: '-',
      guest: false
    },
    {
      against: 'AliRn',
      result: '-',
      guest: true
    },
    {
      against: 'MohammadReza',
      result: '-',
      guest: true
    },
    {
      against: 'Behnam',
      result: '-',
      guest: true
    },
    {
      against: 'AliReza',
      result: '-',
      guest: true
    },
    {
      against: 'AliReza_D',
      result: '-',
      guest: true
    },
  ]
})

export const Data: Player[] = [AliRn, MohammadReza, Behnam, AliReza, AliReza_D, Reza];
