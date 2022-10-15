import {Component} from '@angular/core';
import {League} from "../../assets/db/league";
import {Rankings} from "../../assets/db/ranking";

@Component({
  selector: 'app-league',
  templateUrl: './league.page.html',
  styleUrls: ['./league.page.scss']
})
export class LeaguePage {

  ranks = Rankings.sort((a, b) => b.point - a.point);
  league = League;

  isNullCell(item: string) {
    return item.trim() == '##'
  }
}
