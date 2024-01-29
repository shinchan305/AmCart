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

  searchTerm: string = ''
  filteredProducts: IProduct[] = [];
  partiallyFilteredProducts: IProduct[] = [];
  breadcrumbs: any[] = [];
  totalRecords: number = 0;
  page: number = 0;

  constructor(private activateRoute: ActivatedRoute, private _productService: ProductService, private _router: Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {      
      this.calculateBreadcrumbs();
      this.resetData();
      const category = params['category'];
      let subCategory = params['subCategory'];
      subCategory = this.getSubcategory(subCategory);
      if (category === 'men' || category === 'women') {
        this.searchTerm = subCategory ? `category=${category}&subCategory=${subCategory}` : `category=${category}`;
      }
      else {
        this.searchTerm = `query=${subCategory}`;
      }
      this.getProducts(0);
    })
  }

  getProducts(pageNumber: number, searchQuery?: string) {
    if (!searchQuery) {
      searchQuery = this.searchTerm;
    }
    this._productService.searchProduct(searchQuery, pageNumber * 10).subscribe((response: any) => {      
      this.filteredProducts = response.products;
      this.totalRecords = response.totalRecords;
      this.partiallyFilteredProducts = JSON.parse(JSON.stringify(this.filteredProducts));
    })
  }


  private getSubcategory(subCategory: string) {
    if (subCategory && subCategory.includes('&')) {
      subCategory = decodeURIComponent(subCategory);
      let categories = subCategory.split(',');
      let categryToBeModified = categories[categories.length - 1];
      let modifiedCategories = categryToBeModified.split('&').map(x => x.trim());
      categories.pop();
      categories.push(...modifiedCategories);
      subCategory = categories.join(',');
    }
    return subCategory;
  }

  private calculateBreadcrumbs() {
    this.breadcrumbs = [];
    const routes = decodeURIComponent(this._router.url).split('/');
    if (routes.length === 4) {
      this.breadcrumbs.push({ route: '/' + routes.slice(1, 3).join('/'), name: routes.slice(1, 3).join(' ') });
      this.breadcrumbs.push({ route: '', name: routes[3] });
    }
    else {
      this.breadcrumbs.push({ route: '', name: routes.slice(1).join(' ') });
    }
  }

  resetData() {
    this.page = 0;
    this.totalRecords = 0;
    this.filteredProducts = [];
  }

  handleFilter(filter: any) {
    let searchQuery;
    if (filter && Object.keys(filter).length) {
      Object.keys(filter).forEach((key) => {
        if (filter[key].length) {
          const brands = `&brands=${filter[key].join(',')}`
          this.resetData();
          searchQuery = this.searchTerm + brands;          
        }
        else {
          searchQuery = this.searchTerm;
        }        
      })

      this.getProducts(this.page, searchQuery);
    }
  }

  pageChanged(pageNumber: number) {
    this.getProducts(pageNumber);
  }
}
