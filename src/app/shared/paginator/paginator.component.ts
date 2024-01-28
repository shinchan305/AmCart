import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Input()
  page: number = 0;

  @Input()
  totalRecords: number = 0;

  @Output()
  sendCurrentPage: EventEmitter<number> = new EventEmitter();

  constructor(config: NgbPaginationConfig) {
    config.size = 'md pagination-custom';
  }
  sendPage(currentPage: number) {
    this.sendCurrentPage.emit(currentPage - 1);
  }

}
