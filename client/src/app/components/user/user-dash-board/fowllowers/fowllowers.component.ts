import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-fowllowers',
  templateUrl: './fowllowers.component.html',
  styleUrls: ['./fowllowers.component.css']
})
export class FowllowersComponent implements OnInit {
  GetFowllowers: any[] = []
  userId = localStorage.getItem("userId")

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.GetFowllowers(this.userId).subscribe((data: any) => {
       this.GetFowllowers=data.response.Fowllowers
    })

  }
}
