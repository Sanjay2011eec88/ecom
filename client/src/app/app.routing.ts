import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {SignupComponent} from "./signup/signup.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "./_guards/auth.guard";
import {AdminComponent} from "./admin/admin.component";
import { ProductComponent } from './product/product.component';
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
    { path: '', component: HomepageComponent, pathMatch:'full' },
    { path: 'homepage', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'productDetail/:productID', component: ProductComponent},
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'admin', component: AdminComponent,  canActivate: [AuthGuard] },
    { path: 'cart', component: CartComponent, canActivate:[AuthGuard]},
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRouting {

}
