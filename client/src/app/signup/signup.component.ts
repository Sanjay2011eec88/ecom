import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../_services/user.service";
import { AlertService} from "../_services/alert.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
  ) { }

  register() {
    this.loading = true;
    console.log(this.model);
    this.userService.signup(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['homepage']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
  // onSubmit(value:any){
  //   console.log(value);
  //   this.userService.signup(value).
  //     subscribe(
  //       data => {
  //         console.log(data);
  //         this.router.navigate(['homepage']);
  //       },
  //     error => console.log(error)
  //   );
  // }
}
