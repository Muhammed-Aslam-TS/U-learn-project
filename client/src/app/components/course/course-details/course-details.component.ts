import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../service/course-service.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  constructor(private service: CourseServiceService) { }

  image = ''
  description = ''
  name = ''
  Fname = ''
  Lname = ''
  email = ''
  Price = ''
  category:any[]

  ngOnInit() {
    const courseId = localStorage.getItem('courseId')

    this.service.getCoures(courseId).subscribe((data: any) => {

      this.category = data.findCategory
      console.log(this.category,"ddddddddddddddddddddddddddddddddddddd");
      this.image = data.course.CourseImage
      this.description = data.course.discription
      this.name = data.course.courseName
      this.Price = data.course.Price
      this.Fname = data.user.Fname
      this.Lname = data.user.Lname
      this.email = data.user.Email
    })
  }

}
