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
import { UserService} from "./_services/user.service";
import { ProfileService} from "./_services/profile.service";
import {AlertComponent} from "./_directives/alert.component";
import {AlertService} from "./_services/alert.service";
import {AuthGuard} from "./_guards/auth.guard";
import {AuthenticationService} from "./_services/authentication.service";
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    SignupComponent,
    ProfileComponent,
    AlertComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule, AppRouting, FormsModule, HttpModule
  ],
  providers: [
    AuthGuard,
    UserService,
    AlertService,
    AuthenticationService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
