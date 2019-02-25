import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model'
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from 'src/app/shared/data-storage.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[]
  private subscription: Subscription;

  constructor(private productServices: ProductService,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getProductsArray()
    this.subscription = this.productServices.productsChanged
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
      );
  }
}
