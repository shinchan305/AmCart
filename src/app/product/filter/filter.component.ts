import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnChanges {
  @Input()
  searchQuery: string = '';

  filters: any[] = [];

  selectedFilter: any = {};

  @Output()
  sendFilter: EventEmitter<any[]> = new EventEmitter();

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getFilters();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchQuery'].currentValue !== changes['searchQuery'].previousValue) {
      this.getFilters();
    }
  }

  getFilters() {
    this._productService.getFilters(this.searchQuery).subscribe((response: any) => {
      this.filters = response.data.filters;
    })
  }

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
