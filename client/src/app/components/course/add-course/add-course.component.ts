import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CourseServiceService } from '../service/course-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
  providers: [],
})
export class AddCourseComponent implements OnInit {
  uploadForm!: FormGroup;
  userId = localStorage.getItem("userId")

  constructor(
    private formBuilder: FormBuilder,
    private service: CourseServiceService,
    private router:Router
  ) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      courseName: '',
      discription: '',
      userId: '',
      Price: '',
      date: '',
      Category: '',
      CourseImage: null
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.uploadForm.patchValue({
      CourseImage: file
    });

  }

  onSubmit() {
    console.log(this.uploadForm.get("date")?.value);

    const formData = new FormData();
    formData.append('courseName', this.uploadForm.get("courseName")?.value);
    formData.append('discription', this.uploadForm.get("discription")?.value);
    formData.append('date', this.uploadForm.get("date")?.value);
    formData.append('userId', this.uploadForm.get("userId")?.value);
    formData.append('CourseImage', this.uploadForm.get("CourseImage")?.getRawValue());
    formData.append('Price', this.uploadForm.get("Price")?.value);
    formData.append('Category', this.uploadForm.get("Category")?.value);

if (formData) {
  Swal.fire(
    'Course is added successfully!',
    'You clicked the button!',
    'success'
  )

  this.service.addCourse(formData).subscribe((response) => {
    console.log(response);

  })

this.router.navigate(['/dashBoard'])
}
}
   
}



   //  formData.forEach((value:FormDataEntryValue,key:string)=>{
    //   console.log(`key: ${key}`);
    //   console.log(`value: ${value}`);
    //  })