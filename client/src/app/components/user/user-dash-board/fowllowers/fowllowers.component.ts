import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-fowllowers',
  templateUrl: './fowllowers.component.html',
  styleUrls: ['./fowllowers.component.css']
})
export class FowllowersComponent implements OnInit {
  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes: any = [3, 6, 9, 12];
  GetFowllowers: any[] = []
  Fowllowers: any[] = []
  userId = localStorage.getItem("userId")

  constructor(private service: ServiceService,private postService:PostService) { }

  ngOnInit() {
    this.fetchPosts();
    this.service.GetFowllowers(this.userId).subscribe((data: any) => {
console.log(data);

      this.GetFowllowers = data.Fowllowers

      const uniqueData: any[] = [];
      this.GetFowllowers.forEach((element) => {
        const isDuplicate = uniqueData.some((item) => item._id === element._id);

        if (!isDuplicate) {
          uniqueData.push(element);
        }
      });

      this.Fowllowers = uniqueData

    })
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



