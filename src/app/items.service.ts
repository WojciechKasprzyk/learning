import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  take = 30;
  skip = 0;
  constructor() { }

  async getItems() {
    const items = [];
    for (let i = this.skip; i < this.skip + this.take; i++) {
      items.push({
        id: i,
        name: 'name' + i,
        description: `product ${i} description`
      })
    }
    this.skip += this.take;
    return Promise.resolve(items);
  }
}
