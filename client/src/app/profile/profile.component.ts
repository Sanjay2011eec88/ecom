import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../_services/profile.service";
import {AlertService} from "../_services/alert.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: string='';

  constructor(private profileService: ProfileService,
              private alertService: AlertService,) { }

  ngOnInit() {
      this.profile();
  }

  profile(){
    this.profileService.profile()
      .subscribe(data =>{
        console.log("Dattata",data);
        this.userProfile = data;
      },error => {
        this.alertService.error(error);
      })
  }
}
