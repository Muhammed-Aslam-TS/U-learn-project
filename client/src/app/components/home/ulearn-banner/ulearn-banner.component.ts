import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../service/home.service';
import { FormBuilder } from '@angular/forms';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-ulearn-banner',
  templateUrl: './ulearn-banner.component.html',
  styleUrls: ['./ulearn-banner.component.css']
})
export class UlearnBannerComponent implements OnInit {


  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes: any = [3, 6, 9, 12];


  imageURL = '';
  courseData: any[] = []
  userId?: string
  searchData = ''
  data: { userId: string; ownerId: string; coursId: string; };


  constructor(private router: Router,
    private service: HomeService,
    private formBuilder: FormBuilder,
    private postService: PostService) {
    const user = localStorage.getItem('userToken');
    user ? this.show1 = true : this.show1 = false
  }

  show1 = false;

  signUp() {
    this.router.navigate(['login']);
  }

  ngOnInit() {
    this.fetchPosts()
  }

  searchSubmit() {
    this.toggleModal()
    this.service.serchData(this.searchData).subscribe((response) => {

      this.courseData = response
      console.log(response);
    })
  }
  showModal = false;
  toggleModal() {
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


  fetchPosts(): void {
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.POSTS = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
}
