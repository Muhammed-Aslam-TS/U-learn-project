import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './features/homePageFeatures/landing-page/landing-page.component';
import { UserLoginComponent } from './features/userFeatures/user-login/user-login.component';
import { UserSignUpComponent } from './features/userFeatures/user-sign-up/user-sign-up.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'signup', component: UserSignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
