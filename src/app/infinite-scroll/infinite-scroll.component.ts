import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit {
  items: any[];
  constructor(private itemsService: ItemsService) { }

  async ngOnInit() {
    this.items = await this.itemsService.getItems();
  }

  async onScroll() {
    this.items = [
      ...this.items,
      ... await this.itemsService.getItems()
    ];
  }

}
