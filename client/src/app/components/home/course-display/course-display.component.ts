import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-display',
  templateUrl: './course-display.component.html',
  styleUrls: ['./course-display.component.css']
})
export class CourseDisplayComponent implements OnInit {
  data: { userId: string; ownerId: string; coursId: string; };
  constructor(private router: Router, private service: HomeService) { }

  courseData: any[] = []
  user = localStorage.getItem('userToken');
  
  ngOnInit() {
    this.service.GetAllCourse().subscribe((data: any) => {
      this.courseData = data
      console.log(this.courseData, 'course dataaaaaaaaaaaaaa');
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
}
