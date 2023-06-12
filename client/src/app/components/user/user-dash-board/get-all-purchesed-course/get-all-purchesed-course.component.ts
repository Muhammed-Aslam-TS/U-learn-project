import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-get-all-purchesed-course',
  templateUrl: './get-all-purchesed-course.component.html',
  styleUrls: ['./get-all-purchesed-course.component.css']
})
export class GetAllPurchesedCourseComponent {
  constructor(private service: ServiceService) { }
  userId = localStorage.getItem('userId')
  allPurchersCourseData: any[] = []

  ngOnInit() {

    this.service.GetAllPurchersCourse(this.userId).subscribe((data: any) => {
      this.allPurchersCourseData=data.purcherseCourses
      console.log(this.allPurchersCourseData,"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");

    })



  }
}
