import {Component} from '@angular/core';
import {RouteAnimation} from "./animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [RouteAnimation('fade')]
})
export class AppComponent {
}
