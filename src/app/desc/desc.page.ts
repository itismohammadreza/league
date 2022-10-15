import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-desc',
  templateUrl: './desc.page.html',
  styleUrls: ['./desc.page.scss']
})
export class DescPage implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigateByUrl('/league')
    }, 8000)
  }
}
