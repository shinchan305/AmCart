import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ShortDetailsComponent } from './short-details/short-details.component';
import { FilterComponent } from './filter/filter.component';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CatalogueComponent,
    ShortDetailsComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductRoutingModule,
    FilterComponent,
    ShortDetailsComponent
  ]
})
export class ProductModule { }
