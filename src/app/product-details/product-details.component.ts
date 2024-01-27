import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any = {
    id: '21',
    name: 'Cotton Check Light Blue Shirt',
    price: 1499,
    discount: 30,
    categories: ['men', 'blue', 'light', 'casual shirts'],
    brand: 'Roadster',
    rating: 5,
    image: 'image28',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec ullamcorper sapien. Nullam finibus pharetra interdum. Donec elementum vel sem vel gravida. Vivamus ac dignissim elit, nec lacinia ligula. In vel elit iaculis, vulputate ligula sed, efficitur libero. Integer sed condimentum tortor, at pharetra ex. Nunc commodo lacinia eleifend. Sed id orci at est ultrices ultrices ultricies suscipit ex. Nam fermentum, dolor at commodo porta, nisi ante vulputate metus, at interdum nunc magna id tellus. Donec aliquam diam eu volutpat suscipit. Vivamus sit amet varius magna. Cras sagittis, est sed euismod hendrerit, nisi tortor fringilla dui, non iaculis tortor est eget purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc faucibus, diam ac sodales fringilla, elit ipsum volutpat ante, quis vehicula justo lorem eu mi. Morbi efficitur odio quis sodales mollis. Aliquam erat volutpat."
  };

  constructor(private _productService: ProductService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      const productId = params['id'];
      this.getProduct(productId);
    })
  }

  getProduct(productId: string) {
    this._productService.getProducts().subscribe((response: any) => {
      const products = <any[]>response.products;
      this.product = products.filter(x => x.id == productId)[0];
    })
  }
}
