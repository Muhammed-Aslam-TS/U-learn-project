import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminLogInComponent } from './admin-log-in/admin-log-in.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { AdminAuthGuardService } from 'src/app/guard/admin/admin-auth-guard.service';
import { AdminUnAuthGuardService } from 'src/app/guard/admin/admin-un-auth-guard.service';
import { AllUsersComponent } from './all-users/all-users.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { WalletComponent } from './wallet/wallet.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {
    path: '', component: AdminComponent,
    children: [
      { path: 'login', component: AdminLogInComponent,canActivate: [AdminUnAuthGuardService] },
      { path: 'adminSignup', component: RegisterComponent},
      { path: 'dashBoard', component: AdminDashBoardComponent,canActivate: [AdminAuthGuardService] },
      { path: 'allUsers', component: AllUsersComponent,canActivate: [AdminAuthGuardService] },
      { path: 'allCourses', component: AllCoursesComponent,canActivate: [AdminAuthGuardService] },
      { path: 'wallet', component: WalletComponent,canActivate: [AdminAuthGuardService] },
    ]
  },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
