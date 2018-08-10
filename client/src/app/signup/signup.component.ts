import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../services/authServices/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(value:any){
    console.log(value);
    this.authService.signup(value).
      subscribe(
        data => {
          console.log(data);
          this.router.navigate(['homepage']);
        },
      error => console.log(error)
    );
  }
}
