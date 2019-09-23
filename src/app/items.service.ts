import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {
  skip = 0;
  constructor() { }

  async getItems(take = 30) {
    const items = [];
    for (let i = this.skip; i < this.skip + take; i++) {
      items.push({
        id: i,
        name: 'name' + i,
        description: `product ${i} description`
      })
    }
    this.skip += take;
    return Promise.resolve(items);
  }
}
