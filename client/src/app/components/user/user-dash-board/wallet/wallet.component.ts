import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  // pagination_____________________________
  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes: any = [3, 6, 9, 12];
  // pagination_____________________________

  walletAmount: number
  walletHistory: any[]
  userId = localStorage.getItem('userId')
  constructor(private service: ServiceService, private postService: PostService) { }

  ngOnInit(): void {
    this.fetchPosts()
    console.log('jhgkugn');
    this.service.getWallet(this.userId).subscribe((data: any) => {
      console.log(data);
      this.walletHistory = data.wallet.wallet
      this.walletAmount = data.wallet.walletAmount
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
