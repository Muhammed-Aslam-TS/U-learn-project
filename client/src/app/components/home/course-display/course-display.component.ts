import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router } from '@angular/router';
import { PostService } from 'src/app/post.service';


@Component({
  selector: 'app-course-display',
  templateUrl: './course-display.component.html',
  styleUrls: ['./course-display.component.css']
})
export class CourseDisplayComponent implements OnInit {

  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes: any = [3, 6, 9, 12];

  data: { userId: string; ownerId: string; coursId: string; };
  constructor(private router: Router, private service: HomeService, private PostService:PostService) { }

  courseData: any[] = []
  user = localStorage.getItem('userToken');

  ngOnInit() {
    this.service.GetAllCourse().subscribe((data: any) => {
      this.courseData = data
    })
  }

  handleClick(ownerId: string, coursId: string) {
    const UserId = localStorage.getItem('userId')
    localStorage.setItem("courseId", coursId)

    this.data = {
      userId: UserId,
      ownerId: ownerId,
      coursId: coursId
    }
    this.router.navigate(['courseDetails'])
  }



  fetchPosts(): void {
    this.PostService.getAllPosts().subscribe(
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


  Onclick(ownerId: string, coursId: string) {
    const UserId = localStorage.getItem('userId')
    localStorage.setItem("courseId", coursId)

    this.data = {
      userId: UserId,
      ownerId: ownerId,
      coursId: coursId
    }
    this.router.navigate(['courseDetails'])
  }
}
