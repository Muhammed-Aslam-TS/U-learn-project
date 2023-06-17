// moudules______________________________________

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

// components___________________________________

import { AdminLogInComponent } from './admin-log-in/admin-log-in.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { AdminComponent } from './admin.component';
import { NavBarComponent } from 'src/app/shared/components/admin/nav-bar/nav-bar.component';
import { DashBoardNavBarComponent } from 'src/app/shared/components/admin/dash-board-nav-bar/dash-board-nav-bar.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { WalletComponent } from './wallet/wallet.component';



@NgModule({
  declarations: [
    AdminLogInComponent,
    AdminDashBoardComponent,
    AdminComponent,
    NavBarComponent,
    DashBoardNavBarComponent,
    AllUsersComponent,
    AllCoursesComponent,
    WalletComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
