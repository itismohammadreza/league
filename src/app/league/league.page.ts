import {Component} from '@angular/core';
import {League} from "../../assets/db/league";

@Component({
  selector: 'app-league',
  templateUrl: './league.page.html',
  styleUrls: ['./league.page.scss']
})
export class LeaguePage {

  ranks = [
    {
      name: 'Alireza-D'
    },
    {
      name: 'Behnam'
    },
    {
      name: 'Reza'
    },
    {
      name: 'AliReza'
    },
    {
      name: 'Mohammad-R'
    },
    {
      name: 'Ali'
    },
  ];

  league = League;
  league2 = [
    {
      name: 'Alireza-D'
    },
    {
      name: 'Behnam'
    },
    {
      name: 'Reza'
    },
    {
      name: 'AliReza'
    },
    {
      name: 'Mohammad-R'
    },
    {
      name: 'Ali'
    },
  ];
  tableColumns = this.league2.map(x => x.name)

  isNullCell(item: string) {
    return item.trim() == '##'
  }
}
