import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "./_services/authentication.service";
import {Router} from "@angular/router";
import {AlertService} from "./_services/alert.service";
import {AuthGuard} from "./_guards/auth.guard";
import {AdminService} from "./_services/admin.service";
import {ProfileService} from "./_services/profile.service";
import {CartService} from "./_services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  category='';
  noOfItemsInCart=0;
  constructor(
    private router: Router,
    private authService:AuthenticationService,
    private alertService: AlertService,
    private authGuard: AuthGuard,
    private adminService: AdminService,
    private profileService: ProfileService,
    private cartService: CartService
  ){}

  categoryList:string='';
  ngOnInit(){
    this.getCategories();
    this.getCartLength();
  }

  logout() {
    this.authService.logout()
      .subscribe(
        data => {
          this.alertService.success('Logged Out', true);
          this.router.navigate(['login']);
        },
        error => {
          this.alertService.error(error);
        });
  }

  getCategories(){
    this.adminService.getCategories()
      .subscribe(
        data => {
          this.categoryList = data;
        },
        error => {
          this.alertService.error(error);
        })
  }

  onChange(event): void {  // event will give you full breif of action
    const categoryId = event.target.value;
    console.log(categoryId);
    this.adminService.categorySelected.emit(categoryId);
  }

  getCartLength(){
    this.cartService.noOfitemsInCart()
      .subscribe(
        cartLength => {
          this.noOfItemsInCart = cartLength.totalItems;
        },
        error => {
          this.alertService.error(error);
        })
  }
}
