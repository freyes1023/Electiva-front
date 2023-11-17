
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product/product';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  baseUrl = 'https://electivaback-n4jsneydta-ue.a.run.app/products';
  constructor(private httpClient: HttpClient) { }


  getProducts(): Observable<Product[]> {
    return this.httpClient.get(this.baseUrl) as Observable<Product[]>;
  }

  getProduct(id: string): Observable<Product> {
    return this.httpClient.get(this.baseUrl + `/${id}`) as Observable<Product>;
  }

  addProduct(product: Product) {
    return this.httpClient.post(this.baseUrl, product);
  }

  updateProduct(product: Product,id:string) {
    return this.httpClient.put(this.baseUrl+ `/${id}`, product);
  }
  deleteProduct(id?: number) {
    if (!id) {
      return
    }
    return this.httpClient.delete(this.baseUrl + `/${id}`);
  }


}