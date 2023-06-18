import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  signUpForm!: FormGroup;

  constructor(
    private service: AdminService,
    private formBuilder: FormBuilder,
    private router: Router) {}

    // ngOnInit() {
    //   this.signUpForm = this.formBuilder.group({
    //     FirstName: ['', Validators.required],
    //     LastName: ['', Validators.required],
    //     YourEmail: ['', [Validators.required, Validators.email]],
    //     YourPhone: ['', Validators.required],
    //     YourPassword: ['', [Validators.required, Validators.minLength(6)]],
    //     ConfirmPassword: ['', Validators.required]
    //   });
    // }


  signupObj: any = {
    FullName: '',
    Email: '',
    Phone: '',
    Password: '',
  };


  DoSignUp() {
    this.service.DoSignUp(this.signupObj).subscribe(data => {
      if (data) {
        window.alert("user created")
        this.router.navigate(['login'])
      } else {
        window.alert("creation error")
        this.router.navigate(['signup'])
      }


    })
  }
}