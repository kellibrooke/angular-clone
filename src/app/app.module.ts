import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodayPipe } from './today.pipe';
import { WeekPipe } from './week.pipe';
import { MonthPipe } from './month.pipe';
import { MostRecentPipe } from './most-recent.pipe';

import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PopularTodayComponent } from './popular-today/popular-today.component';
import { PopularWeekComponent } from './popular-week/popular-week.component';
import { PopularMonthComponent } from './popular-month/popular-month.component';
import { MostRecentComponent } from './most-recent/most-recent.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    SignUpComponent,
    PopularTodayComponent,
    TodayPipe,
    PopularWeekComponent,
    WeekPipe,
    MonthPipe,
    PopularMonthComponent,
    MostRecentComponent,
    MostRecentPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
