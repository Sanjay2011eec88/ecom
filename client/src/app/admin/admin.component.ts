import { Component, OnInit } from '@angular/core';
import {AdminService} from "../_services/admin.service";
import {AlertService} from "../_services/alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  model: any = {};
  loading = false;
  constructor(private adminService: AdminService,
              private alertService: AlertService,
              private router: Router,) { }

  ngOnInit() {
  }

  createCategory(){
    this.loading = true;
    this.adminService.createCategory(this.model)
      .subscribe(data =>{
        console.log("Created Succesfullty");
        this.router.navigate(['admin']);
      },error => {
        this.alertService.error(error);
      })
  }
}
