import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './features/adminFeature/admin-login/admin-login.component';
import { AdminDashBoardComponent } from './features/adminFeature/admin-dash-board/admin-dash-board.component';
import { UserLoginComponent } from './features/userFeatures/user-login/user-login.component';
import { UserSignUpComponent } from './features/userFeatures/user-sign-up/user-sign-up.component';
import { LandingPageComponent } from './features/homePageFeatures/landing-page/landing-page.component';
import { AdminNavbarComponent } from './shared/navBar/admin/admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './shared/navBar/user/user-navbar/user-navbar.component';
import {RouterModule} from '@angular/router'
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashBoardComponent,
    UserLoginComponent,
    UserSignUpComponent,
    LandingPageComponent,
    AdminNavbarComponent,
    UserNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
