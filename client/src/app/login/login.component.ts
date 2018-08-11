import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/authServices/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(value:any){
    console.log(value);
    this.authService.login(value).
    subscribe(
      data => {
        console.log(data);
        this.router.navigate(['profile']);
      },
      error => console.log(error)
    );
  }
}
