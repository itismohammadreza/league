import {Component} from '@angular/core';
import {Data} from "../../assets/db/data";
import {IMatchItem, Player} from "../../assets/db/models";

@Component({
  selector: 'app-league',
  templateUrl: './league.page.html',
  styleUrls: ['./league.page.scss']
})
export class LeaguePage {
  data = Data;
  players = this.data.map(item => item.name);
  ranks = (JSON.parse(JSON.stringify(this.data)) as Player[]).sort((a, b) => b.point - a.point);

  ngOnInit() {
  }

  isNullCell(rowIndex: number, colIndex: number) {
    return rowIndex == colIndex
  }

  getPlayerMatches(player: any, rowIndex: number) {
    const result: IMatchItem[] = [];
    const matches = this.data.find(p => p.name == player.name)!.matches;
    const isGuestMatch = matches.filter(m => m.guest);
    const isNotGuestMatch = matches.filter(m => !m.guest);
    for (let i = 0; i < rowIndex; i++) {
      result.push(isGuestMatch[i])
    }
    result[rowIndex] = {
      against: player.name,
      result: '',
      guest: false
    }
    for (let i = rowIndex; i < isNotGuestMatch.length; i++) {
      result.push(isNotGuestMatch[i])
    }
    return result;
  }
}
