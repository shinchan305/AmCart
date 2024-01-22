import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popover-content',
  templateUrl: './popover-content.component.html',
  styleUrls: ['./popover-content.component.scss']
})
export class PopoverContentComponent {
  @Input()
  content: any;

  @Input()
  headerColor: string = '';

  @Output()
  subcategorySelected: EventEmitter<string> = new EventEmitter();

  selectSubCategory(category: string) {
    if (category) {
      this.subcategorySelected.emit(category);
    }
  }
}
