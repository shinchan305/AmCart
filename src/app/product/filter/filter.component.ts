import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filters: any[] = [
    {
      category: 'Brand',
      items: [{
        id: 'nike',
        value: 'Nike'
      },
      {
        id: 'puma',
        value: 'Puma'
      },
      {
        id: 'adidas',
        value: 'Adidas'
      },
      {
        id: 'Allen Solly',
        value: 'Allen Solly'
      },
      {
        id: 'Gucci',
        value: 'Gucci'
      },
      {
        id: 'Peter England',
        value: 'Peter England'
      },
      {
        id: 'Roadster',
        value: 'Roadster'
      }]
    },
    {
      category: 'Price',
      items: [
        {
          min: 100,
          max: 499,
          value: 'Rs 100 - Rs 499'
        },
        {
          min: 500,
          max: 999,
          value: 'Rs 500 - Rs 999'
        },
        {
          min: 1000,
          max: 1999,
          value: 'Rs 1000 - Rs 1999'
        },
        {
          min: 2000,
          max: 2999,
          value: 'Rs 2000 - Rs 2999'
        }
      ]
    },
    {
      category: 'Color',
      items: [
        {
          id: 'blue',
          value: '<i class="bi bi-circle-fill" style="color: blue"></i> Blue'
        },
        {
          id: 'black',
          value: '<i class="bi bi-circle-fill" style="color: black"></i> Black'
        },
        {
          id: 'red',
          value: '<i class="bi bi-circle-fill" style="color: red"></i> Red'
        },
        {
          id: 'green',
          value: '<i class="bi bi-circle-fill" style="color: green"></i> Green'
        },
        {
          id: 'yellow',
          value: '<i class="bi bi-circle-fill" style="color: yellow"></i> Yellow'
        },
      ]
    },
    {
      category: 'Rating',
      items: [
        {
          min: 1,
          max: 5,
          value: '1 <i class="bi bi-star-fill"></i> & above'
        },
        {
          min: 2,
          max: 5,
          value: '2 <i class="bi bi-star-fill"></i> & above'
        },
        {
          min: 3,
          max: 5,
          value: '3 <i class="bi bi-star-fill"></i> & above'
        },
        {
          min: 4,
          max: 5,
          value: '4 <i class="bi bi-star-fill"></i> & above'
        }
      ]
    }
  ]
}
