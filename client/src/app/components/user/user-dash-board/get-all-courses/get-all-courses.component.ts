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
allCourses :any[] = []

constructor(private service:ServiceService){}
// @ViewChild(MatPaginator)paginator: MatPaginator 
// @ViewChild(MatSort):sort :MatSort 
ngOnInit(){
  this.service.getCourse().subscribe((response:any)=>{
    console.log(response)
    this.allCourses = response
  })

  // this.data
}



}
