export interface Item {
    pk: number;
    name:string;
    display_img_url: string;
    points: number;
    quantity: number;
    valid_until?: string;
    low_quantity:number;
  }