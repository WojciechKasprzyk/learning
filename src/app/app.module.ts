import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';

import { MatTabsModule, MatListModule } from '@angular/material';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
