import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL: string = "http://ec2-44-200-135-93.compute-1.amazonaws.com";

  constructor(public _httpClient: HttpClient) { }

  getProductById(id: any) {
    return this._httpClient.get(`${this.baseURL}:3000/products/${id}`);
    // return this._httpClient.get("/assets/data/products.json");
  }

  searchProduct(query: string, from: number) {
    return this._httpClient.get(`${this.baseURL}:3001/search?${query}&from=${from}`);
  }

  getFilters(query: string) {
    return this._httpClient.get(`${this.baseURL}:3001/filters?${query}`);
  }
}
