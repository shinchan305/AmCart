import { Component, Input } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Component({
  selector: 'app-short-details',
  templateUrl: './short-details.component.html',
  styleUrls: ['./short-details.component.scss']
})
export class ShortDetailsComponent {
  @Input()
  product!: IProduct;

  goToProduct(productId: string) {
    console.log(productId);
  }

  changeClass() {
    
  }
}
