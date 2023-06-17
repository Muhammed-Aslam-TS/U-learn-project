import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor(private service: UserServiceService) { }


  userId = localStorage.getItem('userId')
  userFname = ''
  userLname = ''
  userEmail = ''
  userPhone = ''


  ngOnInit() {
    this.service.getUserDetails(this.userId).subscribe(((data: any) => {
      console.log(data);
      
      this.userFname = data.Fname
      this.userEmail=data.Email
      this.userLname=data.Lname
      this.userPhone=data.Phone
    }))
  }


}
