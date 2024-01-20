import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public _httpClient: HttpClient) { }

  getProducts() {
    return this._httpClient.get("http://localhost:3000/products");
  }
}
