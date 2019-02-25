import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { Product } from '../products/product.model';
import { ProductService } from '../products/product.service';
import { ShoppingList } from '../shared/shoppingList.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class DataStorageService {

    constructor(private http: HttpClient,
        private productService: ProductService,
        private slService: ShoppingListService) { }

    getProductsArray() {
        return this.http.get<Product[]>('https://prodct-base.firebaseio.com/product.json')
        .subscribe(
            (products: Product[]) => {
                this.productService.setProducts(products);
            }
        );
    }

    getShoppingListArray() {
        return this.http.get<ShoppingList[]>('https://rafal-shop.firebaseio.com/shopping-list.json').subscribe(
            (shoppingList) => {
                this.slService.setShoppingList(shoppingList);
            }
        );
    }

    addProductsToShoppingList() {
        return this.http.put('https://rafal-shop.firebaseio.com/shopping-list.json', this.slService.getShoppingList());
    }
}