import { MatStepperModule } from '@angular/material/stepper';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';


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
import { DashBoardComponent } from './components/user/user-dash-board/dash-board/dash-board.component';
import { ChatBoxComponent } from './components/user/user-dash-board/chat-box/chat-box.component';
import { DashBordNavBarComponent } from './shared/components/user/dash-bord-nav-bar/dash-bord-nav-bar.component';
import { ChatUserComponent } from './components/user/user-dash-board/chat-user/chat-user.component';


const firebase = {
  apiKey: "AIzaSyBC4y6cT6FCm00SA6CfQeomtW_4YRPYdI4",
  authDomain: "auth-1dbcc.firebaseapp.com",
  projectId: "auth-1dbcc",
  storageBucket: "auth-1dbcc.appspot.com",
  messagingSenderId: "623488054012",
  appId: "1:623488054012:web:33c7ba239d5c84aaa09d79",
  measurementId: "G-G5SE36HY2F"
}



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
    DashBoardComponent,
    ChatBoxComponent,
    DashBordNavBarComponent,
    ChatUserComponent,
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
    AngularFireModule.initializeApp(firebase),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
