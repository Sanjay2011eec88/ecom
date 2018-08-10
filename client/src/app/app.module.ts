import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting} from './app.routing'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AuthService} from "./services/authServices/auth.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, AppRouting, FormsModule, HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
