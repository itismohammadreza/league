import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PrimeNgModule} from "./prime-modules/prime-ng.module";
import {CoverPage} from './cover/cover.page';
import {LeaguePage} from './league/league.page';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoadingPage} from './loading/loading.page';
import { DescPage } from './desc/desc.page';

@NgModule({
  declarations: [
    AppComponent,
    LoadingPage,
    CoverPage,
    DescPage,
    LeaguePage,
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoadingPage
      },
      {
        path: 'cover',
        component: CoverPage
      },
      {
        path: 'desc',
        component: DescPage
      },
      {
        path: 'league',
        component: LeaguePage
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
