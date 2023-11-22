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
      items: ['Nike', 'Puma', 'Adidas', 'Allen Solly', 'Gucci', 'Peter England', 'Roadster']
    },
    {
      category: 'Price',
      items: ['Rs 100 - Rs 499', 'Rs 500 - Rs 999', 'Rs 1000 - Rs 1999', 'Rs 2000 - Rs 2999']
    },
    {
      category: 'Color',
      items: ['<i class="bi bi-circle-fill" style="color: blue"></i> Blue', '<i class="bi bi-circle-fill" style="color: black"></i> Black',
      '<i class="bi bi-circle-fill" style="color: red"></i> Red', '<i class="bi bi-circle-fill" style="color: green"></i> Green']
    },
    {
      category: 'Rating',
      items: ['1 <i class="bi bi-star-fill"></i> & above', '2 <i class="bi bi-star-fill"></i> & above',
      '3 <i class="bi bi-star-fill"></i> & above', '4 <i class="bi bi-star-fill"></i> & above']
    }
  ]
}
