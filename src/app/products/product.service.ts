import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'

import { Product } from './product.model'

@Injectable()
export class ProductService {
    productsChanged = new Subject<Product[]>();

    private products: Product[]

    setProducts(products: Product[]) {
        this.products = products;
        this.productsChanged.next(this.products.slice())
    }

    getProducts() {
        return this.products.slice();
    }

    getProduct(index: number) {
        return this.products[index]
    }
}