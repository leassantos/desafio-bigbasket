import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from './domain/product';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

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

  constructor(private service: ProductService){

  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(){
    this.service.getCategory();
  }

  onSidePanel(){
    this.isSidePanelVisible = true;
  }

  closeSidePanel(){
    this.isSidePanelVisible = false;
  }
}
