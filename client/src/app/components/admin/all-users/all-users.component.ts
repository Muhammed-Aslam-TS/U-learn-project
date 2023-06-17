import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  allUsers: any[] = []

  constructor(private service: AdminService) { }
  ngOnInit(): void {
    this.service.AllUsers().subscribe((response) => {
      this.allUsers = response
      console.log(response);

    })

  }

  isBlock(userId: string) {
    console.log(userId);
    localStorage.removeItem("userId")
    localStorage.removeItem("userToken")
    this.service.BlockUser(userId).subscribe((response) => {
      console.log(response);

    })


  }
}
