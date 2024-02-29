import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from './domain/product';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { Category } from '../categories/domain/category';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  isSidePanelVisible: boolean = false;
  
  product: Product = {
    productId: 0,
    productSku: '',
    productName: '',
    productPrice: 0,
    productShortName: '',
    productDescription: '',
    createdDate: new Date(),
    deliveryTimeSpan: '',
    categoryId: 0,
    productImageUrl: '',
  };

  categoryList: Category[] = [];
  productList: Product[] = [];

  constructor(private service: ProductService){

  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getCategories(){
    this.service.getCategories().subscribe(categories => {
      this.categoryList = categories;
    })
  }

  getProducts(){
    this.service.getProducts().subscribe(products => {
      this.productList = products;
    })
  }

  onSidePanel(){
    this.isSidePanelVisible = true;
  }

  closeSidePanel(){
    this.isSidePanelVisible = false;
  }

  createNewProduct(){
    this.service.createNewProduct(this.product).subscribe(product => {
      if(product){
        alert("Product Created!");
        this.getProducts();
      }
      else
        alert("Product not created!");
    })
  }
}
