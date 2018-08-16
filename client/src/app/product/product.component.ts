import { Component, OnInit } from '@angular/core';
import {AdminService} from "../_services/admin.service";
import {AlertService} from "../_services/alert.service";
import {ActivatedRoute} from "@angular/router";
import {AuthGuard} from "../_guards/auth.guard";
import {CartService} from "../_services/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId:any = '';
  produtDetails: any='';
  quantity=1;
  productPrice:any = 0;

  constructor(private adminService:AdminService,
              private alertService: AlertService,
              private route: ActivatedRoute,
              private authGuard: AuthGuard,
              private cartService: CartService) { }

  ngOnInit() {
    this.productId = this.route.snapshot.params['productID'];
    this.getProduct();
  }

  getProduct(){
    this.adminService.getProduct(this.productId)
      .subscribe(
        data => {
          this.produtDetails = data;
          this.productPrice = data.price;
        },error => {
          this.alertService.error(error);
        }
      );
  }

  editQunatity(action){
    switch (action){
      case 'plus':
        this.quantity++;
        this.productPrice += this.produtDetails.price;
        break;
      case 'minus':
        if(this.quantity > 1){
          this.quantity--;
          this.productPrice -= this.produtDetails.price;
        }
        break;
      default:
        break;
    }
  }

  addToCart(){
    var productDetail = {
      product_id:this.produtDetails._id,
      priceValue:this.productPrice,
      quantity: this.quantity
    }
    this.cartService.addProductToCart(productDetail)
      .subscribe(
        response => {
          console.log("Product data", response);
        },error => {
          this.alertService.error(error);
        }
      );
  }
}
