import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListingItemComponent } from '../listing-item/listing-item.component';
import { ContentService } from './content.service';
interface Category {
  name: string;
  checked: boolean;
  expand: boolean;
}

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FormsModule, ListingItemComponent, ReactiveFormsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  constructor(private contentService: ContentService) {}

  sortParam: boolean = true

  categories: Category[] = [
    { name: 'e-Voucher', checked: false, expand: false },
    { name: 'Products', checked: false, expand: false },
    { name: 'Evergreen', checked: false, expand: false },
    { name: 'Fashion & Retail', checked: false, expand: false },
  ];

  sortItems() {
    this.sortParam = !this.sortParam
    this.contentService.sortItems(this.sortParam);
  }
}
