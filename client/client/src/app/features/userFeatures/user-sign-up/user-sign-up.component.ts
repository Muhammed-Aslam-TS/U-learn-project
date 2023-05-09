import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css'],
})
export class UserSignUpComponent {
constructor(private userService:UserServiceService,private fb:FormBuilder,private router:Router){}

signupObj: any = {
  Fname:'',
  Lname:'',
  Email:'',
  Phone:'',
  Password:'',
  ConfirmPassword: '',
};


  DoSignUp(){
    this.userService.DoSignUp(this.signupObj).subscribe(data =>{
      if(data){
        window.alert("user created")
        this.router.navigate(['login'])
      }else{
        window.alert("creation error")
        this.router.navigate(['signup'])
      }


    })
  }
}



