import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  constructor(private service: ServiceService) { }
  userId = localStorage.getItem('userId')
  courseId = ''
  MyCourse: any[] = []
  user = {}
  smae = {}


  ngOnInit() {
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
}
