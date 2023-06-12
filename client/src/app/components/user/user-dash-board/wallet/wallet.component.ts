import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  walletAmount: number
  walletHistory: any[]
  userId = localStorage.getItem('userId')
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    console.log('jhgkugn');
    this.service.getWallet(this.userId).subscribe((data: any) => {
      console.log(data);
      this.walletHistory = data.wallet.wallet
      this.walletAmount = data.wallet.walletAmount
      console.log(this.walletHistory,"hhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
      

    })

  }
}
