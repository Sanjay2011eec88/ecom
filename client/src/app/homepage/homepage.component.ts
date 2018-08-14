import { Component, OnInit } from '@angular/core';
import {AdminService} from "../_services/admin.service";
import {AlertService} from "../_services/alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  categoryId: string="";
  productList: string="";
  product: any= '';

  constructor(private adminService: AdminService,
              private alertService: AlertService,
              private router: Router) {
    this.adminService.categorySelected.subscribe(
      (category_id:string) => {
        if(category_id === ""){
          this.categoryId = "All Categories"
        }else{
          this.categoryId = category_id;
        }
        this.getProducts();
      }
    )
  }


  ngOnInit() {
    this.categoryId = "All Categories";
    this.getProducts();
  }

  getProducts(){
    this.adminService.getProducts(this.categoryId)
      .subscribe(
        data => {
          this.productList = data;
        },error => {
          this.alertService.error(error);
        }
      )
  }

  getProduct(product){
    console.log("Product",product);
    this.router.navigate(['productDetail',product]);
  }
}
