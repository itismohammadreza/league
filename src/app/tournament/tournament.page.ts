import {Component} from '@angular/core';
import {Data} from "../../assets/db/data";

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.page.html',
  styleUrls: ['./tournament.page.scss']
})
export class TournamentPage {
  data = Data;
  players = this.data.map(item => item.name);
}
