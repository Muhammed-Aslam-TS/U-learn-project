import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css'],
})
export class UserSignUpComponent {
constructor(private userService:UserServiceService, private fb:FormBuilder){}



  submit = false
  RegistrationForm =this.fb.group({
    Fname :['',Validators.required],
    Lname :['',Validators.required],
    Email :['',[Validators.required,Validators.email]],
    Phone :['',[Validators.required,Validators.pattern('[0-9]{10}')]],
  })

  get f(){
    return this.RegistrationForm.controls
  }
  onsubmit(){
    this.submit = true
    console.log('clicked');
    console.log('f',this.f);
  }


  sinUpObj: any = {
    Fname:'',
    Lname:'',
    Email:'',
    Phone:'',
    Password:'',
    ConfirmPassword: '',
  };

  DoSignUp() {
    console.log(this.sinUpObj);
    this.userService.DoSignUp(this.sinUpObj).subscribe(data =>{
      console.log(data);

    })
  }
}
