import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private userService: UserServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }


  ngOnInit() {

    this.signUpForm = this.formBuilder.group({
      Fname: ['', Validators.required],
      Lname: ['', Validators.required],
      Phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      Email: ['', [Validators.required, Validators.email]],
      CurrentPosition: ['', Validators.required],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required]
    });
  }

  hasError(controlName: string): boolean {
    const control = this.signUpForm.get(controlName);
    return control.touched && control.invalid;
  }

  


  DoSignUp() {
    if (this.signUpForm.invalid) {
      return;
    }

    this.userService.DoSignUp(this.signUpForm.value).subscribe(
      data => {
        if (data) {
          window.alert('User created');
          this.router.navigate(['login']);
        } else {
          window.alert('Creation error');
          this.router.navigate(['signup']);
        }
      },
      error => {
        console.log('Error:', error);
      }
    );
  }


}
