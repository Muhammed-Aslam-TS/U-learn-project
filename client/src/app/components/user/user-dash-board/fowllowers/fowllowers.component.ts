import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-fowllowers',
  templateUrl: './fowllowers.component.html',
  styleUrls: ['./fowllowers.component.css']
})
export class FowllowersComponent implements OnInit {
  GetFowllowers: any[] = []
  Fowllowers: any[] = []
  userId = localStorage.getItem("userId")

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.GetFowllowers(this.userId).subscribe((data: any) => {

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
}



