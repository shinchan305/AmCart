import { Component, EventEmitter, Output } from '@angular/core';

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
        id: 'Nike',
        value: 'Nike'
      },
      {
        id: 'Puma',
        value: 'Puma'
      },
      {
        id: 'Adidas',
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
      },
      {
        id: 'MANGO',
        value: 'MANGO'
      },
      {
        id: "Mast & Harbour",
        value: "Mast & Harbour"
      }
      ]
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
    }
  ]

  selectedFilter: any = {};

  @Output()
  sendFilter: EventEmitter<any[]> = new EventEmitter();

  filterChange(e: any, filter: any, item: any) {
    if (!this.selectedFilter[filter.category]) {
      this.selectedFilter[filter.category] = [];
    }

    if (e.target.checked) {
      if (item.id && !this.selectedFilter[filter.category].some((x: any) => x === item.id)) {
        this.selectedFilter[filter.category].push(item.id);
      }
    }
    else {
      const index = this.selectedFilter[filter.category].indexOf(item.id);
      this.selectedFilter[filter.category].splice(index, 1);
    }

    this.applyFilter();
  }

  applyFilter() {
    this.sendFilter.emit(this.selectedFilter);
  }
}
