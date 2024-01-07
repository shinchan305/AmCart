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
      id: '1',
      name: 'Plain Cotton T-Shirt',
      price: 399,
      discount: 15,
      category: ['men', 'white', 'tshirt'],
      brand: 'Nike',
      rating: 4,
      image: 'image8'
    },
    {
      id: '2',
      name: 'Printed Cotton T-Shirt',
      price: 399,
      discount: 15,
      category: ['women', 'black', 'tshirt'],
      brand: 'Puma',
      rating: 3,
      image: 'image9'
    },
    {
      id: '3',
      name: 'Printed Cotton T-Shirt',
      price: 399,
      discount: 15,
      category: ['men', 'white', 'tshirt'],
      brand: 'Adidas',
      rating: 5,
      image: 'image10'
    },
    {
      id: '4',
      name: 'Printed Cotton T-Shirt',
      price: 399,
      discount: 15,
      category: ['men', 'pink', 'tshirt'],
      brand: 'Gucci',
      rating: 2,
      image: 'image11'
    },
    {
      id: '5',
      name: 'Plain Cotton T-Shirt',
      price: 399,
      discount: 15,
      category: ['men', 'white', 'tshirt'],
      brand: 'Roadster',
      rating: 1,
      image: 'image12'
    },
    {
      id: '6',
      name: 'Printed Cotton T-Shirt',
      price: 399,
      discount: 15,
      category: ['men', 'white', 'tshirt'],
      brand: 'Allen Solly',
      rating: 4,
      image: 'image13'
    },
    {
      id: '7',
      name: 'Printed Cotton T-Shirt',
      price: 399,
      discount: 15,
      category: ['men', 'black', 'tshirt'],
      brand: 'Peter England',
      rating: 3,
      image: 'image14'
    },
    {
      id: '8',
      name: 'Plain Cotton T-Shirt',
      price: 399,
      discount: 15,
      category: ['men', 'white', 'tshirt'],
      brand: 'Nike',
      rating: 4,
      image: 'image15'
    },
    {
      id: '9',
      name: 'Printed Cotton T-Shirt',
      price: 399,
      discount: 15,
      category: ['women', 'black', 'tshirt'],
      brand: 'Puma',
      rating: 3,
      image: 'image16'
    },
    {
      id: '10',
      name: 'Plain Cotton T-Shirt',
      price: 1399,
      discount: 15,
      category: ['men', 'white', 'tshirt'],
      brand: 'Adidas',
      rating: 5,
      image: 'image17'
    },
    {
      id: '11',
      name: 'Plain Cotton T-Shirt',
      price: 2999,
      discount: 15,
      category: ['men', 'white', 'tshirt'],
      brand: 'Gucci',
      rating: 2,
      image: 'image18'
    },
    {
      id: '12',
      name: 'Printed Cotton T-Shirt',
      price: 599,
      discount: 15,
      category: ['men', 'white', 'tshirt'],
      brand: 'Roadster',
      rating: 1,
      image: 'image19'
    },
    {
      id: '13',
      name: 'Plain Cotton T-Shirt',
      price: 1299,
      discount: 15,
      category: ['women', 'white', 'tshirt'],
      brand: 'Allen Solly',
      rating: 4,
      image: 'image20'
    },
    {
      id: '14',
      name: 'Plain Cotton T-Shirt',
      price: 2199,
      discount: 15,
      category: ['women', 'black', 'tshirt'],
      brand: 'Peter England',
      rating: 3,
      image: 'image21'
    }
  ]

  category: string = ''
  filteredProducts: IProduct[] = [];

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      const category = params['category'];
      if (category !== this.category) {
        this.filteredProducts = this.products.filter(x => x.category.includes(category));
      }
    })
  }

}
