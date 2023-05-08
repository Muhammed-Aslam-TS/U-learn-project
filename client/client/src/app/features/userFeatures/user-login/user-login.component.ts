import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
constructor(private userService:UserServiceService){}
  loginObj:any = {
    Email:"",
    Password:""
  }

  DoLogin(){
    this.userService.DoLogin(this.loginObj).subscribe(data =>{
      console.log(data,'hhhhhhhhhhhhhhhhhh');
    })
  }

}

