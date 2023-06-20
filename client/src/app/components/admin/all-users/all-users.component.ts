import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {z
  allUsers: any[] = []
  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private service: AdminService,private postService:PostService) { }
  ngOnInit(): void {
    this.fetchPosts()
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


  fetchPosts(): void {
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.POSTS = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
}
