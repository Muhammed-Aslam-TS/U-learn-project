import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  allCourseData: any[] = []
  userId = localStorage.getItem("userId")

  constructor(private service: ServiceService) { }
  ngOnInit() {
    
    this.service.GetAllCourse(this.userId).subscribe((data: any) => {
       this.allCourseData=data
      console.log(data,';;;;;;;;;;;;;;;;;;;;;');
      
    })
    // console.log(this.courseData,'________________-');
  }
}
