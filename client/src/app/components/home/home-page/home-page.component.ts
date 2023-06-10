import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  imageURL = '';
  courseData: any[] = []
  userId?: string

  constructor(private router: Router, private service: HomeService) {
    const user = localStorage.getItem('userToken');
    user ? this.show1 = true : this.show1 = false
  }

  show1 = false;

  signUp() {
    this.router.navigate(['login']);
  }

  ngOnInit() {
    this.service.GetAllCourse().subscribe((data: any) => {
      this.courseData = data
      console.log(this.courseData, 'course dataaaaaaaaaaaaaa');
    })
  }

  handleClick(ownerId: string, coursId: string) {
    const UserId = localStorage.getItem('userId')
    localStorage.setItem("courseId",coursId)

    const data = {
      userId: UserId,
      ownerId: ownerId,
      coursId: coursId
    }


    // this.service.chatRoom(data).subscribe((data: any) => {
    //   console.log(data);
    // })

    this.router.navigate(['courseDetails'])

  }



}
