import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cover',
  templateUrl: './cover.page.html',
  styleUrls: ['./cover.page.scss']
})
export class CoverPage implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigateByUrl('/league')
    }, 3000)
  }
}
