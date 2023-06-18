import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { PostService } from 'src/app/post.service';


@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private service: ServiceService,private PostService:PostService) { }
  userId = localStorage.getItem('userId')
  courseId = ''
  MyCourse: any[] = []
  user = {}
  smae = {}


  ngOnInit() {
    this.fetchPosts();
    this.service.getMyCourse(this.userId).subscribe((data) => {
      this.MyCourse = data.MyCourse
      const user: any[] = data.user.purcherseCourses
      console.log(data);

      const uniqueData: any[] = [];
      user.forEach((element) => {
        const isDuplicate = uniqueData.some((item) => item._id === element._id);

        if (!isDuplicate) {
          uniqueData.push(element);
        }
      });

      this.smae = uniqueData

    })
  }

  removeCourse(courseId: string) {
    this.courseId = courseId
    this.service.removeCourse(courseId).subscribe((data) => {
      console.log(data);
    })


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
}
