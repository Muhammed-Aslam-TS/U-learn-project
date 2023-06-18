import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-get-all-purchesed-course',
  templateUrl: './get-all-purchesed-course.component.html',
  styleUrls: ['./get-all-purchesed-course.component.css']
})
export class GetAllPurchesedCourseComponent {
  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private service: ServiceService, private router:Router,private postService:PostService) { }
  data: { userId: string; ownerId: string; coursId: string; };
  userId = localStorage.getItem('userId')
  allPurchersCourseData: any[] = []

  ngOnInit() {
  this.fetchPosts();
    this.service.GetAllPurchersCourse(this.userId).subscribe((data: any) => {
      this.allPurchersCourseData = data.purcherseCourses

    })
  }

  handleClick(ownerId: string, coursId: string) {
console.log(ownerId,coursId);

    const UserId = localStorage.getItem('userId')
    localStorage.setItem("courseId", coursId)
    localStorage.setItem("ownerId", ownerId)

    this.data = {
      userId: UserId,
      ownerId: ownerId,
      coursId: coursId
    }


    this.router.navigate(['chatBox'])
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
