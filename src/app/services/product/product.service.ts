import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }


  getAllProducts(){

  }

  createProduct(){

  }

  deleteProduct(){
    
  }

  updateProduct(){

  }

  getCategory(){
    this.http.get('assets/categories.json').subscribe(data => {
      console.log('Funcionaou: ' + data)
    })
  }
}

const CATEGORY_DATA: Category[] = [
  {categoryId: 1, categoryName: '', parentCategoryId: 1},
  {categoryId: 1, categoryName: '', parentCategoryId: 1},
  {categoryId: 1, categoryName: '', parentCategoryId: 1},
  {categoryId: 1, categoryName: '', parentCategoryId: 1},
  {categoryId: 1, categoryName: '', parentCategoryId: 1},
]

export interface Category{
  categoryId: number;
  categoryName: string;
  parentCategoryId: number;
}
