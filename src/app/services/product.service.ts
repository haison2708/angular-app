import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private httpClient: HttpClient) { }
  productUrl = 'https://627f1715be1ccb0a465a87be.mockapi.io/api/v1/product';

  getAllProducts(): Observable<Product>{
    return this.httpClient.get<Product>(this.productUrl); // return an observable
  }

  // getCategories(): Observable<Category>{
  //   const categoriesUrl = 'http://localhost:3000/categories';
  //   return this.httpClient.get<Category>(categoriesUrl);
  // }

  // createProduct(productBody : any): Observable<Product>{
  //   const productUrl = 'http://localhost:3000/products';
  //
  //   return this.httpClient.post<Product>(productUrl, productBody); // return an observable
  // }

  viewProduct(productId : number): Observable<Product>{
    const productUrl = this.productUrl + "/" + productId;
    return this.httpClient.get<Product>(productUrl);// return an observable
  }

  // updateProduct(productId : number, productBody : any): Observable<Product>{
  //   const productUrl = 'http://localhost:3000/products/' + productId;
  //   return this.httpClient.put<Product>(productUrl, productBody); // return an observable
  // }

  // deleteProduct(productId : number): Observable<Product>{
  //   const productUrl = 'http://localhost:3000/products/' + productId;
  //   return this.httpClient.delete<Product>(productUrl); // return an observable
  // }
}
