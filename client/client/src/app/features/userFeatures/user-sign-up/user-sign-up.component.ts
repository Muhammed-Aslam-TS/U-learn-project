import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css'],
})
export class UserSignUpComponent {
constructor(private userService:UserServiceService){}

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
    this.userService.DoSignUp(this.sinUpObj)
  }
}
