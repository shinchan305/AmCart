import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../models/IProduct';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  products: IProduct[] = [];

  category: string = ''
  filteredProducts: IProduct[] = [];
  breadcrumbs: string[] = [];

  constructor(private activateRoute: ActivatedRoute, private _productService: ProductService, private _router: Router) { }

  ngOnInit(): void {
    this.getProducts();    
  }

  getProducts() {
    this._productService.getProducts().subscribe((response: any) => {
      this.products = response.products;
      this.activateRoute.params.subscribe(params => {
        const category = params['category'];
            this.calculateBreadcrumbs();
        if (category !== this.category) {
          this.filteredProducts = this.products.filter(x => x.categories.split(',').includes(category));
        }
      })
    }, err => console.log(err))
  }
  

  private calculateBreadcrumbs() {
    this.breadcrumbs = [];
    const routes = this._router.url.split('/');
    this.breadcrumbs.push(routes.slice(1).join(' '));
  }
}
