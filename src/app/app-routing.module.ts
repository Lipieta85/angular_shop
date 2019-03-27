import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ProductStartComponent } from './products/product-start/product-start.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: ProductsComponent, canActivate: [AuthGuard], children: [
        { path: '', component: ProductStartComponent },
        { path: ':id', component: ProductDetailComponent }
    ]},
    { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}