import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';
import {VsFor} from 'ng2-vs-for';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {
  items;
  constructor(private itemsService: ItemsService) { }

  async ngOnInit() {
    this.items = await this.itemsService.getItems(1000);
  }

}
