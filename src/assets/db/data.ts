import {Player} from "./models";

const AliRn = new Player({
  name: 'AliRn',
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
