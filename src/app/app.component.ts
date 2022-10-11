import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  league = [
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
  tableColumns = this.league.map(x => x.name)
}
