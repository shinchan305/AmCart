import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../models/IProduct';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  products: IProduct[] = [
    {
      name: 'Plain Cotton T-Shirt',
      price: 399,
      discount: 15,
      category: ['men', 'white', 'tshirt'],
      brand: 'Nike',
      rating: 4,
      image: 'image8'
    },
    {
      name: 'Printed Cotton T-Shirt',
      price: 399,
      discount: 15,
      category: ['women', 'black', 'tshirt'],
      brand: 'Puma',
      rating: 3,
      image: 'image9'
    },
    {
      name: 'Printed Cotton T-Shirt',
      price: 399,
      discount: 15,
      category: ['men', 'white', 'tshirt'],
      brand: 'Adidas',
      rating: 5,
      image: 'image10'
    },
    {
      name: 'Printed Cotton T-Shirt',
      price: 399,
      discount: 15,
      category: ['men', 'pink', 'tshirt'],
      brand: 'Gucci',
      rating: 2,
      image: 'image11'
    },
    {
      name: 'Plain Cotton T-Shirt',
      price: 399,
      discount: 15,
      category: ['men', 'white', 'tshirt'],
      brand: 'Roadster',
      rating: 1,
      image: 'image12'
    },
    {
      name: 'Printed Cotton T-Shirt',
      price: 399,
      discount: 15,
      category: ['men', 'white', 'tshirt'],
      brand: 'Allen Solly',
      rating: 4,
      image: 'image13'
    },
    {
      name: 'Printed Cotton T-Shirt',
      price: 399,
      discount: 15,
      category: ['men', 'black', 'tshirt'],
      brand: 'Peter England',
      rating: 3,
      image: 'image14'
    },
    {
      name: 'Plain Cotton T-Shirt',
      price: 399,
      discount: 15,
      category: ['men', 'white', 'tshirt'],
      brand: 'Nike',
      rating: 4,
      image: 'image15'
    },
    {
      name: 'Printed Cotton T-Shirt',
      price: 399,
      discount: 15,
      category: ['women', 'black', 'tshirt'],
      brand: 'Puma',
      rating: 3,
      image: 'image16'
    },
    {
      name: 'Plain Cotton T-Shirt',
      price: 1399,
      discount: 15,
      category: ['men', 'white', 'tshirt'],
      brand: 'Adidas',
      rating: 5,
      image: 'image17'
    },
    {
      name: 'Plain Cotton T-Shirt',
      price: 2999,
      discount: 15,
      category: ['men', 'white', 'tshirt'],
      brand: 'Gucci',
      rating: 2,
      image: 'image18'
    },
    {
      name: 'Printed Cotton T-Shirt',
      price: 599,
      discount: 15,
      category: ['men', 'white', 'tshirt'],
      brand: 'Roadster',
      rating: 1,
      image: 'image19'
    },
    {
      name: 'Plain Cotton T-Shirt',
      price: 1299,
      discount: 15,
      category: ['women', 'white', 'tshirt'],
      brand: 'Allen Solly',
      rating: 4,
      image: 'image20'
    },
    {
      name: 'Plain Cotton T-Shirt',
      price: 2199,
      discount: 15,
      category: ['women', 'black', 'tshirt'],
      brand: 'Peter England',
      rating: 3,
      image: 'image21'
    }
  ]

  filteredProducts: IProduct[] = [];

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      const category = params['category'];
      if (category) {
        this.filteredProducts = this.products.filter(x => x.category.includes(category));
      }
    })
  }

}
