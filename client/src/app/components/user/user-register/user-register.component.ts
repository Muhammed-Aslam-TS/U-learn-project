import { Component } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  signUpForm!: FormGroup;

  constructor(
    private userService: UserServiceService,
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
    Fname: '',
    Lname: '',
    Email: '',
    Phone: '',
    Password: '',
    ConfirmPassword: '',
  };


  DoSignUp() {
    this.userService.DoSignUp(this.signupObj).subscribe(data => {
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
