import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ProductForm {
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private api = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  create(data: ProductForm) {
    return this.http.post(this.api, data);
  }
}