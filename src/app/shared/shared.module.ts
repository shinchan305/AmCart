import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PopoverContentComponent } from './popover-content/popover-content.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    BreadCrumbComponent,
    CheckboxComponent,
    FooterComponent,
    HeaderComponent,
    PaginatorComponent,
    PopoverContentComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
