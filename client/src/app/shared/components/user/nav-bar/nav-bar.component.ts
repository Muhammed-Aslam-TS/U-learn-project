import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  // button = 'LogIn'
  UserId = localStorage.getItem('userId');
  UserToken = localStorage.getItem('userToken');
  
response = {
  response:"User LogOut",
  userId:this.UserId
}


  show = true;


  constructor(private router: Router,private service:UserService) {
    if (this.UserToken) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
  logIn() {
    this.router.navigate(['login'])
  }

  LogOut() {
   console.log('kkkkkkkkkkkkkkkkkk');
   console.log(this.UserId);
   
    this.service.logOut(this.response).subscribe((data:object)=>{
      console.log(data,"data?>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      
      if(data){
        localStorage.removeItem('userToken');
        localStorage.removeItem('userId');
        this.router.navigate(['/']);
      }
    })
  }
}

