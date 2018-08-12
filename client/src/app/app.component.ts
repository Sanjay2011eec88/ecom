import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "./_services/authentication.service";
import {Router} from "@angular/router";
import {AlertService} from "./_services/alert.service";
import {AuthGuard} from "./_guards/auth.guard";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private router: Router,
    private authService:AuthenticationService,
    private alertService: AlertService,
    private authGuard: AuthGuard
  ){}
  ngOnInit(){}

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
}
