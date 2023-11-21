import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ShortDetailsComponent } from './short-details/short-details.component';
import { FilterComponent } from './filter/filter.component';
import { LongDetailsComponent } from './long-details/long-details.component';



@NgModule({
  declarations: [
    CatalogueComponent,
    ShortDetailsComponent,
    FilterComponent,
    LongDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
