import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {admin} from "../../../models/interFace"

@Component({
  selector: 'app-admin-log-in',
  templateUrl: './admin-log-in.component.html',
  styleUrls: ['./admin-log-in.component.css']
})
export class AdminLogInComponent {
  form!: FormGroup;
  token = ''



  constructor(
    private adminService: AdminService,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) { }


  loginObj: admin = {
    Email: 'admin@gmail.com',
    Password: 'admin123',
  }

  DoLogin() {
    this.adminService.adminLogIn(this.loginObj).subscribe((data) => {
      
      if (!data.admin.Email) {
        window.alert('Email not existed')
      } else {
        if (data.admin.Email) {
          localStorage.setItem('adminEmail', data.admin.Email);
          this.router.navigate(['admin/dashBoard']);
        } else {
          this.router.navigate(['admin/login']);
        }
      }
    });
  }
}
