import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../service/home.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ulearn-banner',
  templateUrl: './ulearn-banner.component.html',
  styleUrls: ['./ulearn-banner.component.css']
})
export class UlearnBannerComponent {
  imageURL = '';
  courseData: any[] = []
  userId?: string
  searchData = ''
  data: { userId: string; ownerId: string; coursId: string; };


  constructor(private router: Router, private service: HomeService, private formBuilder: FormBuilder) {
    const user = localStorage.getItem('userToken');
    user ? this.show1 = true : this.show1 = false
  }

  show1 = false;

  signUp() {
    this.router.navigate(['login']);
  }


  searchSubmit() {
    this.toggleModal()
    this.service.serchData(this.searchData).subscribe((response) => {

      this.courseData = response
      console.log(response);
    })
  }
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }

  handleClick(ownerId: string, coursId: string) {
    const UserId = localStorage.getItem('userId')
    localStorage.setItem("courseId", coursId)

    this.data = {
      userId: UserId,
      ownerId: ownerId,
      coursId: coursId
    }
    this.router.navigate(['courseDetails'])
  }
}
