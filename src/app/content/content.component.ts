import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListingItemComponent } from '../listing-item/listing-item.component';
import { NgFor } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

interface Item {
  title: string;
  imageUrl: string;
  points: number;
  status: 'inStock' | 'outOfStock';
  validUntil?: string;
}

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
  searchForm: FormGroup;
  categories: Category[] = [
    { name: 'e-Voucher', checked: false, expand: false },
    { name: 'Products', checked: false, expand: false },
    { name: 'Evergreen', checked: false, expand: false },
    { name: 'Fashion & Retail', checked: false, expand: false },
  ];
  items: Item[] = [
    {
      title: 'test reward',
      imageUrl: 'https://i.imgur.com/J8c56gD.jpg',
      points: 0,
      status: 'outOfStock',
    },
    {
      title: 'test reward',
      imageUrl: 'https://i.imgur.com/J8c56gD.jpg',
      points: 0,
      status: 'outOfStock',
    },{
      title: 'test reward',
      imageUrl: 'https://i.imgur.com/J8c56gD.jpg',
      points: 0,
      status: 'outOfStock',
    },{
      title: 'test reward',
      imageUrl: 'https://i.imgur.com/J8c56gD.jpg',
      points: 0,
      status: 'outOfStock',
    },{
      title: 'test reward',
      imageUrl: 'https://i.imgur.com/J8c56gD.jpg',
      points: 0,
      status: 'outOfStock',
    },{
      title: 'test reward',
      imageUrl: 'https://i.imgur.com/J8c56gD.jpg',
      points: 0,
      status: 'outOfStock',
    },{
      title: 'test reward',
      imageUrl: 'https://i.imgur.com/J8c56gD.jpg',
      points: 0,
      status: 'outOfStock',
    },{
      title: 'test reward',
      imageUrl: 'https://i.imgur.com/J8c56gD.jpg',
      points: 0,
      status: 'outOfStock',
    },{
      title: 'test reward',
      imageUrl: 'https://i.imgur.com/J8c56gD.jpg',
      points: 0,
      status: 'outOfStock',
    },{
      title: 'test reward',
      imageUrl: 'https://i.imgur.com/J8c56gD.jpg',
      points: 0,
      status: 'outOfStock',
    },{
      title: 'test reward',
      imageUrl: 'https://i.imgur.com/J8c56gD.jpg',
      points: 0,
      status: 'outOfStock',
    },{
      title: 'test reward',
      imageUrl: 'https://i.imgur.com/J8c56gD.jpg',
      points: 0,
      status: 'outOfStock',
    },{
      title: 'test reward',
      imageUrl: 'https://i.imgur.com/J8c56gD.jpg',
      points: 0,
      status: 'outOfStock',
    },{
      title: 'test reward',
      imageUrl: 'https://i.imgur.com/J8c56gD.jpg',
      points: 0,
      status: 'outOfStock',
    },{
      title: 'test reward',
      imageUrl: 'https://i.imgur.com/J8c56gD.jpg',
      points: 0,
      status: 'outOfStock',
    },{
      title: 'test reward',
      imageUrl: 'https://i.imgur.com/J8c56gD.jpg',
      points: 0,
      status: 'outOfStock',
    },{
      title: 'test reward',
      imageUrl: 'https://i.imgur.com/J8c56gD.jpg',
      points: 0,
      status: 'outOfStock',
    },{
      title: 'test reward',
      imageUrl: 'https://i.imgur.com/J8c56gD.jpg',
      points: 0,
      status: 'outOfStock',
    },{
      title: 'test reward',
      imageUrl: 'https://i.imgur.com/J8c56gD.jpg',
      points: 0,
      status: 'outOfStock',
    },
    {
      title: 'Dairy Farm $20',
      imageUrl: 'https://i.imgur.com/9QvG3f6.jpg',
      points: 2,
      status: 'outOfStock',
    },
    {
      title: 'Qoo10 $5 (Code + Pin) together',
      imageUrl: 'https://i.imgur.com/4e8Qh9s.png',
      points: 10,
      status: 'outOfStock',
      validUntil: '31-12-2024'
    },
    {
      title: 'Red lanterns',
      imageUrl: 'https://i.imgur.com/2G5J2O4.jpg',
      points: 0,
      status: 'inStock',
    },
    {
      title: 'Teddy Bear',
      imageUrl: 'https://i.imgur.com/t0oT2l7.jpg',
      points: 0,
      status: 'inStock',
    },
    {
      title: 'Software Testing',
      imageUrl: 'https://i.imgur.com/m1y2V3Z.jpg',
      points: 0,
      status: 'inStock',
    },
  ];

  constructor() {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  toggleCategory(category: Category): void {
    category.checked = !category.checked;
    category.expand = !category.expand;
  }

  getFilteredItems(): Item[] {
    // Apply filters
    return this.items.filter(item => {
      const searchTerm = this.searchForm.value.search.toLowerCase();
      //const categoryFilters = this.categories.filter(category => category.checked).map(category => category.name);

      return (searchTerm && item.title.toLowerCase().includes(searchTerm)) ;
    });
  }

  clearFilters(): void {
    this.categories.forEach(category => {
      category.checked = false;
      category.expand = false;
    });
    this.searchForm.reset();
  }

}