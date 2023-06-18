import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { PostService } from 'src/app/post.service';


@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {


  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes: any = [3, 6, 9, 12];

  allCourses: any[] = []
  constructor(private service: AdminService,private postService:PostService) { }

  ngOnInit() {
    this.fetchPosts()
    this.service.getAllCouress().subscribe((response) => {
      console.log(response);
      this.allCourses = response
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
