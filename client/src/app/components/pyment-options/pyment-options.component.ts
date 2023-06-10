import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PymentService } from './service/pyment.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-pyment-options',
  templateUrl: './pyment-options.component.html',
  styleUrls: ['./pyment-options.component.css']
})
export class PymentOptionsComponent implements OnInit {

  // @ViewChild("paymentRef", { static: true }) paymentRef!: ElementRef;
  // image:string
  // description :string
  // name :string
  // Fname :string
  // Lname :string
  // email :string
  // Price :number
  // phone :string
  courseId = localStorage.getItem('courseId')
  userId = localStorage.getItem('userId')


  courseData = {
    image:'',
    description: '',
    name: '',
    Fname: '',
    Lname: '',
    email: '',
    Price: '',
    courseId: this.courseId,
    userId: this.userId,
    phone:''
  }


  // -------------------------------------------
  constructor(private service: PymentService) { }



  ngOnInit(): void {
    this.service.getDetails(this.courseId).subscribe((data: any) => {
      console.log(data);
      this.courseData.image = data.course.CourseImage
      this.courseData.description = data.course.discription
      this.courseData.name = data.course.courseName
      this.courseData.Price = data.course.Price
      this.courseData.Fname = data.user.Fname
      this.courseData.Lname = data.user.Lname
      this.courseData.email = data.user.Email
      this.courseData.phone = data.user.Phone
    })
  }
}