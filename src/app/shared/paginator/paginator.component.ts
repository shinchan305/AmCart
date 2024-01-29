import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input()
  page: number = 0;

  @Input()
  totalRecords: number = 0;

  @Input()
  pageSize: number = 10;

  @Output()
  sendCurrentPage: EventEmitter<number> = new EventEmitter();

  constructor(config: NgbPaginationConfig) {
    config.size = 'md pagination-custom';
  }

  ngOnInit(): void {
      console.log(this.page);
  }

  sendPage(currentPage: number) {
    this.sendCurrentPage.emit(currentPage - 1);
  }

}
