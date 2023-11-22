import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  { path: 'catalogue/:category/:subCategory', loadChildren: () => import('./product/product.module').then((m) => m.ProductModule) },
  { path: 'catalogue/:category', loadChildren: () => import('./product/product.module').then((m) => m.ProductModule) },
  { path: 'catalogue', loadChildren: () => import('./product/product.module').then((m) => m.ProductModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
