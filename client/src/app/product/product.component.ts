import { Component, OnInit } from '@angular/core';
import {AdminService} from "../_services/admin.service";
import {AlertService} from "../_services/alert.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId:any = '';
  produtDetails='';

  constructor(private adminService:AdminService,
              private alertService: AlertService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this.route.snapshot.params['productID'];
    this.getProduct();
  }

  getProduct(){
    this.adminService.getProduct(this.productId)
      .subscribe(
        data => {
          this.produtDetails = data;
          console.log("Product data", this.produtDetails);
        },error => {
          this.alertService.error(error);
        }
      );
  }
}
