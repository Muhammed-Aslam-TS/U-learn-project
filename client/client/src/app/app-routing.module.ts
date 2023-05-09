import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './features/homePageFeatures/landing-page/landing-page.component';
import { UserLoginComponent } from './features/userFeatures/user-login/user-login.component';
import { UserSignUpComponent } from './features/userFeatures/user-sign-up/user-sign-up.component';
import { UserUnAuthGuardService } from './core/Guard/user/user-un-auth-guard.service';
import { UserAuthGuardService } from './core/Guard/user/user-auth-guard.service';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'login', component: UserLoginComponent,canActivate:[UserUnAuthGuardService] },
  { path: 'signup', component: UserSignUpComponent,canActivate:[UserUnAuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
