import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { PostService } from 'src/app/post.service';


@Component({
  selector: 'app-get-all-courses',
  templateUrl: './get-all-courses.component.html',
  styleUrls: ['./get-all-courses.component.css']
})
export class GetAllCoursesComponent implements OnInit {
  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes: any = [3, 6, 9, 12];



  userId = localStorage.getItem('userId')
  allCourses: any[] = []
  constructor(private service: ServiceService,private postService:PostService) { }

  ngOnInit() {
    this.fetchPosts();

    this.service.getCourse().subscribe((response: any) => {
      console.log(response)
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







