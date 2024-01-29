import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  loading: boolean = true;

  constructor(private _productService: ProductService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      const productId = params['id'];
      this.getProduct(productId);
    })
  }

  getProduct(productId: string) {
    this._productService.getProductById(productId).subscribe((response: any) => {
      this.product = response.data;
      this.loading = false;
    }, err => {
      this.loading = false
      console.log(err.message);
    })
  }
}
