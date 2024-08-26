import { Component, Input } from '@angular/core';
import { Item } from './items.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-listing-item',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './listing-item.component.html',
  styleUrl: './listing-item.component.scss',
})
export class ListingItemComponent {
  items: Item[] = [
    {
      pk: 987,
      name: 'Caffe Coffee Day',
      points: 150,
      display_img_url: '/assets/rewards-logos/ccd-logo.png',
      quantity: 2,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 5,
    },
    {
      pk: 988,
      name: 'Zomato',
      points: 200,
      display_img_url: '/assets/rewards-logos/zomato-logo.jpg',
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

  genericImageUrl : string = "/assets/rewards-logos/placeholder-logo.jpg"


}
