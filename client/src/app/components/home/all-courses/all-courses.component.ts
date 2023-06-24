import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../user/user-dash-board/service.service';
import { Router } from '@angular/router';
import { HomeService } from '../service/home.service';
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

  userId = localStorage.getItem('userId')
  allCourses: any[] = []
  data: { userId: string; ownerId: string; coursId: string; };

  constructor(private router: Router, private service: ServiceService, private PostService:PostService) { }

  ngOnInit() {
    this.service.getCourse().subscribe((response: any) => {
      console.log(response)
      this.allCourses = response
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
    this.router.navigate(['ProAllCourse'])
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
