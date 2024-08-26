import { Injectable } from '@angular/core';
import { Item } from '../listing-item/items.interface';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  items: Item[] = [
    {
      pk: 987,
      name: 'Zomato',
      points: 150,
      display_img_url: '/assets/rewards-logos/zomato-logo.jpg',
      quantity: 2,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 5,
    },
    {
      pk: 988,
      name: 'CCD',
      points: 200,
      display_img_url: '/assets/rewards-logos/ccd-logo.png',
      quantity: 30,
      valid_until: '2025-01-31T00:00:00',
      low_quantity: 10,
    },
    {
      pk: 989,
      name: 'Peter England',
      points: 100,
      display_img_url: '/assets/rewards-logos/peter-logo.png',
      quantity: 0,
      valid_until: '',
      low_quantity: 3,
    },
    {
      pk: 990,
      name: 'Swiggy',
      points: 250,
      display_img_url: '',
      quantity: 20,
      valid_until: '2025-02-28T00:00:00',
      low_quantity: 7,
    },
  ];
  constructor() {}

  /*Sort the items in the listing page according to alphabetical order */
  sortItems(sortParam: boolean) {
    this.items.sort((a, b) => {
      if (a.name < b.name) return sortParam ? -1 : 1;
      if (a.name > b.name) return sortParam ? 1 : -1;
      return 0;
    });
  }
}
