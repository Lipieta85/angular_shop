import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ProductStartComponent } from './products/product-start/product-start.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: ProductsComponent, children: [
        { path: '', component: ProductStartComponent },
        { path: ':id', component: ProductDetailComponent }
    ]},
    { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}