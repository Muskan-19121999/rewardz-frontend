import { Component, Input } from '@angular/core';
import { Item } from './items.interface';
import { DatePipe } from '@angular/common';
import { ContentService } from '../content/content.service';

@Component({
  selector: 'app-listing-item',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './listing-item.component.html',
  styleUrl: './listing-item.component.scss',
})
export class ListingItemComponent {
  constructor(private contentService: ContentService) {}
  genericImageUrl: string = '/assets/rewards-logos/placeholder-logo.jpg';

  get items() {
    return this.contentService.items;
  }
}
