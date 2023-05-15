import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './features/homePageFeatures/landing-page/landing-page.component';
import { UserLoginComponent } from './features/userFeatures/user-login/user-login.component';
import { UserSignUpComponent } from './features/userFeatures/user-sign-up/user-sign-up.component';
import { UserUnAuthGuardService } from './core/Guard/user/user-un-auth-guard.service';
import { UserAuthGuardService } from './core/Guard/user/user-auth-guard.service';
import { TextEditorComponent } from './features/Course/text-editor/text-editor.component';
import { AddCourseFormComponent } from './features/Course/add-course-form/add-course-form.component';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent,canActivate:[UserUnAuthGuardService] },
  { path: 'signup', component: UserSignUpComponent,canActivate:[UserUnAuthGuardService]},
  { path: '', component: LandingPageComponent},
  { path: 'addCourse', component: AddCourseFormComponent,canActivate:[UserAuthGuardService]},
  { path: 'textEditor', component: TextEditorComponent,canActivate:[UserAuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
