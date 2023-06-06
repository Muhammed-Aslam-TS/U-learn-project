import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  allUsers: any[] = []
  status = ''
  constructor(private service: AdminService) { }
  ngOnInit(): void {
    this.service.AllUsers().subscribe((response) => {
      this.allUsers = response
    })


    // const token = localStorage.getItem('userToken');
    // console.log(token);
    
    // if (!token) {
    //   this.status = 'Ofline'
    // }
  }

}
