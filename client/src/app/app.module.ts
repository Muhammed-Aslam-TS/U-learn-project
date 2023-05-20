import { MatStepperModule } from '@angular/material/stepper';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditorModule } from 'primeng/editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './components/course/add-course/add-course.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { AboutPageComponent } from './components/home/about-page/about-page.component';
import { NavBarComponent } from './shared/components/user/nav-bar/nav-bar.component';
import { AdminNavBarComponent } from './shared/components/admin/admin-nav-bar/admin-nav-bar.component';
import { TextEditorComponent } from './components/course/text-editor/text-editor.component';
import { UserDashBoardComponent } from './components/user/user-dash-board/user-dash-board.component';






@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HomePageComponent,
    AboutPageComponent,
    NavBarComponent,
    AdminNavBarComponent,
    TextEditorComponent,
    UserDashBoardComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatStepperModule,
    EditorModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
