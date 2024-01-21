import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  breadcrumbs: any[] = [];

  constructor(private activateRoute: ActivatedRoute, private _productService: ProductService, private _router: Router) { }

  ngOnInit(): void {
    this.getProducts();    
  }

  getProducts() {
    this._productService.getProducts().subscribe((response: any) => {
      this.products = response.products;
      this.activateRoute.params.subscribe(params => {
        const category = params['category'];
           const subCategory = params['subCategory'];
            this.calculateBreadcrumbs();
        if (category !== this.category || subCategory) {
          this.filteredProducts = this.products.filter(x => x.categories.split(',').includes(category));
          if (subCategory) {
            this.filteredProducts = this.filteredProducts.filter(x => x.categories.split(',').includes(subCategory.toLowerCase()));
          }
        }
      })
    }, err => console.log(err))
  }
  

  private calculateBreadcrumbs() {
    this.breadcrumbs = [];
    const routes = decodeURIComponent(this._router.url).split('/');
    if (routes.length === 4) {
      this.breadcrumbs.push({ route: '/' + routes.slice(1, 3).join('/'), name: routes.slice(1, 3).join(' ') });
      this.breadcrumbs.push({route: '', name: routes[3]});
    }
    else {
      this.breadcrumbs.push({route: '', name: routes.slice(1).join(' ')});
    }
  }
}
