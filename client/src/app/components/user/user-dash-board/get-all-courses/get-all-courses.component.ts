import { Component, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatPaginator } from '@angular/material/paginator';
import { isDataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-get-all-courses',
  templateUrl: './get-all-courses.component.html',
  styleUrls: ['./get-all-courses.component.css']
})
export class GetAllCoursesComponent {
  userId = localStorage.getItem('userId')
  allCourses: any[] = []
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getCourse().subscribe((response: any) => {
      console.log(response)
      this.allCourses = response
    })
 
  }

}







