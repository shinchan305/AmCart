import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  { path: 'catalogue/:category/:subCategory', loadChildren: () => import('./product/product.module').then((m) => m.ProductModule) },
  { path: 'catalogue/:category', loadChildren: () => import('./product/product.module').then((m) => m.ProductModule) },
  { path: 'catalogue', loadChildren: () => import('./product/product.module').then((m) => m.ProductModule) },
  { path: 'product-details/:id', loadChildren: () => import('./product-details/product-details.module').then((m) => m.ProductDetailsModule) },
  { path: 'contact-us', loadChildren: () => import('./contact-us/contact-us.module').then((m) => m.ContactUsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
