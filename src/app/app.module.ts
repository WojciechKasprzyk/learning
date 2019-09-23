import { ItemsService } from './items.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';

import { MatTabsModule, MatListModule } from '@angular/material';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';


import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollComponent,
    VirtualScrollComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    ScrollingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatListModule,
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
