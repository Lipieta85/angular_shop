import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { Product } from '../products/product.model';
import { ProductService } from '../products/product.service';
import { ShoppingList } from '../shared/shoppingList.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

    constructor(private http: HttpClient,
        private productService: ProductService,
        private slService: ShoppingListService,
        private authService: AuthService) { }

    getProductsArray() {
        const token = this.authService.getIdToken();

        return this.http.get<Product[]>('https://prodct-base.firebaseio.com/product.json?auth=' + token)
        .subscribe(
            (products: Product[]) => {
                this.productService.setProducts(products);
            }
        );
    }

    getShoppingListArray() {
        const token = this.authService.getIdToken();
        
        return this.http.get<ShoppingList[]>('https://prodct-base.firebaseio.com/shopping-list.json?auth=' + token).subscribe(
            (shoppingList) => {
                this.slService.setShoppingList(shoppingList);
            }
        );
    }

    addProductsToShoppingList() {
        const token = this.authService.getIdToken();

        return this.http.put('https://prodct-base.firebaseio.com/shopping-list.json?auth=' + token, this.slService.getShoppingList());
    }
}