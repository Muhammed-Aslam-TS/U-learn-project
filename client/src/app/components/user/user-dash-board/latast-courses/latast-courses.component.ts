import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-latast-courses',
  templateUrl: './latast-courses.component.html',
  styleUrls: ['./latast-courses.component.css']
})
export class LatastCoursesComponent implements OnInit {
  allCourseData: any[] = []
  userId = localStorage.getItem("userId")

  constructor(private service: ServiceService) { }
  ngOnInit() {
    
    this.service.GetAllCourse(this.userId).subscribe((data: any) => {
       this.allCourseData=data             
    })

   

  }
}
