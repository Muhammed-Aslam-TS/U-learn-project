import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../user/user-dash-board/service.service';
import { Router } from '@angular/router';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {
  userId = localStorage.getItem('userId')
  allCourses: any[] = []
  data: { userId: string; ownerId: string; coursId: string; };

  constructor(private router: Router, private service: ServiceService) { }

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
}
