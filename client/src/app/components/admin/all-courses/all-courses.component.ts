import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';


@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {
  allCourses: any[] = []
  constructor(private service: AdminService) { }

  ngOnInit() {
    this.service.getAllCouress().subscribe((response) => {
      console.log(response);
      this.allCourses = response
    })
  }
}
