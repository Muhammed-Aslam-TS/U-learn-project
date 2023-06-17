import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-purchesed-course',
  templateUrl: './get-all-purchesed-course.component.html',
  styleUrls: ['./get-all-purchesed-course.component.css']
})
export class GetAllPurchesedCourseComponent {
  constructor(private service: ServiceService, private router:Router) { }
  data: { userId: string; ownerId: string; coursId: string; };
  userId = localStorage.getItem('userId')
  allPurchersCourseData: any[] = []

  ngOnInit() {

    this.service.GetAllPurchersCourse(this.userId).subscribe((data: any) => {
      this.allPurchersCourseData = data.purcherseCourses

    })
  }

  handleClick(ownerId: string, coursId: string) {
console.log(ownerId,coursId);

    const UserId = localStorage.getItem('userId')
    localStorage.setItem("courseId", coursId)
    localStorage.setItem("ownerId", ownerId)

    this.data = {
      userId: UserId,
      ownerId: ownerId,
      coursId: coursId
    }


    this.router.navigate(['chatBox'])
  }
}
