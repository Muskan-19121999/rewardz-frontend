import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListingItemComponent } from '../listing-item/listing-item.component';
interface Category {
  name: string;
  checked: boolean;
  expand: boolean;
}

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FormsModule,ListingItemComponent,ReactiveFormsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  categories: Category[] = [
    { name: 'e-Voucher', checked: false, expand: false },
    { name: 'Products', checked: false, expand: false },
    { name: 'Evergreen', checked: false, expand: false },
    { name: 'Fashion & Retail', checked: false, expand: false },
  ];

}