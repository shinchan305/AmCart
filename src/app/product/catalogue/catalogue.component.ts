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
  products: IProduct[] = [
    {
      id: '1',
      name: 'Plain Cotton T-Shirt',
      price: 399,
      discount: 15,
      categories: ['men', 'white', 't-shirts', 'popular'],
      brand: 'Nike',
      rating: 4,
      image: 'image8'
    },
    {
      id: '2',
      name: 'Printed Cotton T-Shirt',
      price: 399,
      discount: 15,
      categories: ['women', 'black', 't-shirts', 'popular'],
      brand: 'Puma',
      rating: 3,
      image: 'image9'
    },
    {
      id: '3',
      name: 'Printed Cotton T-Shirt',
      price: 399,
      discount: 15,
      categories: ['men', 'white', 't-shirts'],
      brand: 'Adidas',
      rating: 5,
      image: 'image10'
    },
    {
      id: '4',
      name: 'Printed Cotton T-Shirt',
      price: 399,
      categories: ['men', 'pink', 't-shirts', 'popular'],
      brand: 'Gucci',
      rating: 2,
      image: 'image11'
    },
    {
      id: '5',
      name: 'Plain Cotton T-Shirt',
      price: 399,
      discount: 15,
      categories: ['men', 'white', 't-shirts'],
      brand: 'Roadster',
      rating: 1,
      image: 'image12'
    },
    {
      id: '6',
      name: 'Printed Cotton T-Shirt',
      price: 399,
      discount: 15,
      categories: ['men', 'white', 't-shirts', 'popular'],
      brand: 'Allen Solly',
      rating: 4,
      image: 'image13'
    },
    {
      id: '7',
      name: 'Printed Cotton T-Shirt',
      price: 399,
      categories: ['men', 'black', 't-shirts'],
      brand: 'Peter England',
      rating: 3,
      image: 'image14'
    },
    {
      id: '8',
      name: 'Plain Cotton T-Shirt',
      price: 399,
      discount: 80,
      categories: ['men', 'white', 't-shirts'],
      brand: 'Nike',
      rating: 4,
      image: 'image15'
    },
    {
      id: '9',
      name: 'Printed Cotton T-Shirt',
      price: 399,
      categories: ['women', 'black', 't-shirts', 'popular'],
      brand: 'Puma',
      rating: 3,
      image: 'image16'
    },
    {
      id: '10',
      name: 'Plain Cotton T-Shirt',
      price: 1399,
      discount: 15,
      categories: ['men', 'white', 't-shirts'],
      brand: 'Adidas',
      rating: 5,
      image: 'image17'
    },
    {
      id: '11',
      name: 'Plain Cotton T-Shirt',
      price: 2999,
      categories: ['men', 'white', 't-shirts'],
      brand: 'Gucci',
      rating: 2,
      image: 'image18'
    },
    {
      id: '12',
      name: 'Printed Cotton T-Shirt',
      price: 599,
      discount: 15,
      categories: ['men', 'white', 't-shirts', 'popular'],
      brand: 'Roadster',
      rating: 1,
      image: 'image19'
    },
    {
      id: '13',
      name: 'Plain Cotton T-Shirt',
      price: 1299,
      discount: 30,
      categories: ['women', 'white', 't-shirts'],
      brand: 'Allen Solly',
      rating: 4,
      image: 'image20'
    },
    {
      id: '14',
      name: 'Plain Cotton T-Shirt',
      price: 2199,
      discount: 50,
      categories: ['women', 'black', 't-shirts'],
      brand: 'Peter England',
      rating: 3,
      image: 'image21'
    },
    {
      id: '15',
      name: 'Satin Red Dress',
      price: 2999,
      discount: 10,
      categories: ['women', 'red', 'dresses & jumpsuits', 'popular'],
      brand: 'Mango',
      rating: 5,
      image: 'image22'
    },
    {
      id: '16',
      name: 'Cotton Pink Dress',
      price: 1399,
      discount: 15,
      categories: ['women', 'pink', 'dresses & jumpsuits'],
      brand: 'Mast & Harbour',
      rating: 3.5,
      image: 'image23'
    },
    {
      id: '17',
      name: 'Cotton Light Pink Dress',
      price: 1499,
      discount: 30,
      categories: ['women', 'light pink', 'dresses & jumpsuits', 'popular'],
      brand: 'Harpa',
      rating: 5,
      image: 'image24'
    },
    {
      id: '18',
      name: 'Cotton Check Blue Shirt',
      price: 1999,
      discount: 30,
      categories: ['men', 'blue', 'green', 'popular', 'casual shirts'],
      brand: 'Roadster',
      rating: 5,
      image: 'image25'
    },
    {
      id: '19',
      name: 'Cotton Check black Shirt',
      price: 1599,
      categories: ['men', 'black', 'checks', 'gray', 'casual shirts'],
      brand: 'Roadster',
      rating: 5,
      image: 'image26'
    },
    {
      id: '20',
      name: 'Cotton Check Blue Green Shirt',
      price: 1499,
      categories: ['men', 'blue', 'green', 'casual shirts'],
      brand: 'Mast & Harbour',
      rating: 5,
      image: 'image27'
    },
    {
      id: '21',
      name: 'Cotton Check Light Blue Shirt',
      price: 1499,
      discount: 30,
      categories: ['men', 'blue', 'light', 'casual shirts'],
      brand: 'Roadster',
      rating: 5,
      image: 'image28'
    },
  ];

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
            this.filteredProducts = this.filteredProducts.filter(x => x.categories.split(',').some(y => subCategory.toLowerCase().indexOf(y) >= 0)); 
          }
        }
      })
    }, err => console.log(err))

    // this.activateRoute.params.subscribe(params => {
    //   const category = params['category'];
    //   const subCategory = params['subCategory'];
    //   this.calculateBreadcrumbs();
    //   if (category !== this.category || subCategory) {
    //     this.filteredProducts = this.products.filter(x => x.categories.includes(category));
    //     if (subCategory) {
    //       this.filteredProducts = this.filteredProducts.filter(x => x.categories.some(y => subCategory.toLowerCase().indexOf(y) >= 0));
    //     }
    //   }
    // })
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
}
