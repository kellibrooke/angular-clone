import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodayPipe } from './today.pipe';

import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PopularTodayComponent } from './popular-today/popular-today.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    SignUpComponent,
    PopularTodayComponent,
    TodayPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
