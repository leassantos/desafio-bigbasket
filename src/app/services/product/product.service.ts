import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constants/constant';
import { Category } from '../../pages/admin/categories/domain/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }


  getProducts(){

  }

  getProductById(){

  }

  createProduct(){

  }

  deleteProduct(){
    
  }

  updateProduct(){

  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(Constant.API_ENDPOINT+Constant.METHODS.GET_CATEGORIES);
  }
}
