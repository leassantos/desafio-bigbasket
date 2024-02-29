import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constants/constant';
import { Category } from '../../pages/admin/categories/domain/category';
import { Observable } from 'rxjs';
import { Product } from '../../pages/admin/products/domain/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(Constant.API_ENDPOINT+Constant.METHODS.GET_PRODUCTS);
  }

  getProductById(productId: number){

  }

  createNewProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(Constant.API_ENDPOINT+Constant.METHODS.CREATE_NEW_PRODUCT, product);
  }

  deleteProduct(){
    
  }

  updateProduct(){

  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(Constant.API_ENDPOINT+Constant.METHODS.GET_CATEGORIES);
  }
}
