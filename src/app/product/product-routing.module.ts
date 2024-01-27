import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';

const routes: Routes = [
  { path: 'catalogue/:category/:subCategory', component: CatalogueComponent },
  { path: 'catalogue/:category', component: CatalogueComponent },
  { path: 'catalogue', component: CatalogueComponent },

  { path: '', component: CatalogueComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
