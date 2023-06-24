import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  uploadForm: FormGroup
  userId = localStorage.getItem('userId')
  userFname = ''
  userLname = ''
  userEmail = ''
  userPhone = ''


 editObj = {
  Fname: '',
  Lname: '',
  Email: '',
  Phone: '',
  userId: this.userId
 }

  constructor(
    private service: UserServiceService,
    private formBuilder: FormBuilder,
    private router: Router) {
  }

  modal = true;
  modalBtn() {
    this.modal = !this.modal
  }




  ngOnInit() {
    this.service.getUserDetails(this.userId).subscribe(((data: any) => {
      console.log(data);

      this.userFname = data.Fname
      this.userLname = data.Lname
      this.userEmail = data.Email
      this.userPhone = data.Phone
    }))
  }


  onSubmit() {
    this.service.getUserDetailsEdit(this.editObj).subscribe(((data: any) => {
      if (data.message) {
        Swal.fire(
          'Your Details Updated',
          'You clicked the button!',
          'success'
        )
      }
      location.reload()
    }))
  
  }

}
