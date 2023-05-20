import { HomePageComponent } from './components/home/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserAuthGuardeServiceService } from './guard/user/user-auth-guarde-service.service';
import { UserUnAuthGuardeServiceService } from './guard/user/user-un-auth-guarde-service.service';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { AddCourseComponent } from './components/course/add-course/add-course.component';
import { TextEditorComponent } from './components/course/text-editor/text-editor.component';
import { UserDashBoardComponent } from './components/user/user-dash-board/user-dash-board.component';

const routes: Routes = [
   { path: 'login', component: UserLoginComponent,canActivate:[UserUnAuthGuardeServiceService] },
  { path: 'signup', component: UserRegisterComponent,canActivate:[UserUnAuthGuardeServiceService]},
  { path: '', component: HomePageComponent},
  { path: 'addCourse', component: AddCourseComponent,canActivate:[UserAuthGuardeServiceService]},
  { path: 'userDashboard', component: UserDashBoardComponent,canActivate:[UserAuthGuardeServiceService]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
