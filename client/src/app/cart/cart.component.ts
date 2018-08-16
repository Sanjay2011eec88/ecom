import { Component, OnInit } from '@angular/core';
import { AdminService} from "../_services/admin.service";
import {AlertService} from "../_services/alert.service";
import {ActivatedRoute} from "@angular/router";
import {AuthGuard} from "../_guards/auth.guard";
import {CartService} from "../_services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cardDetails:any ='';
  constructor(private adminService:AdminService,
              private alertService: AlertService,
              private route: ActivatedRoute,
              private authGuard: AuthGuard,
              private cartService: CartService) { }

  ngOnInit() {
    this.getCartDetails();
  }

  getCartDetails(){
    this.cartService.getCartDetails()
      .subscribe(
        cardDetails => {
          this.cardDetails = cardDetails;
        },error => {
          this.alertService.error(error);
        }
      );
  }
}
