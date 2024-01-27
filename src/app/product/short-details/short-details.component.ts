import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../models/IProduct';

@Component({
  selector: 'app-short-details',
  templateUrl: './short-details.component.html',
  styleUrls: ['./short-details.component.scss']
})
export class ShortDetailsComponent {
  @Input()
  product!: IProduct;

  constructor(private _router: Router) {

  }

  goToProduct(productId: string) {
    console.log(productId);
    this._router.navigateByUrl('/product-details/' + productId);
  }

  addToWishlist(product: IProduct, heart: any) {
    const heartHTML = heart as HTMLAreaElement;
    product.isWishlisted = !product.isWishlisted;
    if (product.isWishlisted) {
      heartHTML.classList.remove('bi-heart');
      heartHTML.classList.add('bi-heart-fill');
      heartHTML.style.color = 'red';
    }
    else {
      heartHTML.classList.remove('bi-heart-fill');
      heartHTML.classList.add('bi-heart');
      heartHTML.style.color = '';
    }
  }

  changeClass() {
    
  }
}
