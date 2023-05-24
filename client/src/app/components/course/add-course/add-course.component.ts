import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CourseServiceService } from './../service/course-service.service';
import { UploadResponse } from 'aws-s3-upload-ash/dist/types';
import AWSS3UploadAshClient from 'aws-s3-upload-ash';
// import { environment } from 'src/environments/environments.prod';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
  providers: [],
})
export class AddCourseComponent {
  event: any;
  submit = false;
  courseName=''
  plan1=''
  plan2=''
  plan3=''
  date=''
  image=''
  discription=''

  // CourseData = this.formBuilder.group({
  //   courseName: ['', Validators.required],
  //   plan1: ['', Validators.required],
  //   plan2: ['', Validators.required],
  //   plan3: ['', Validators.required],
  //   date: ['', Validators.required],
  //   description: ['', Validators.required]
  // });

  constructor(
    private formBuilder: FormBuilder,
    private service: CourseServiceService,
    private router: Router
  ) {}

  // get f() {
  //   return this.CourseData.controls;
  // }

  onFileSelecte(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    // this.images = file;
  }

  onsubmit() {
    const CourseData = new FormData
    CourseData.append('CourceName', this.courseName);
    CourseData.append('plan1', this.plan1);
    CourseData.append('plan2', this.plan2);
    CourseData.append('plan3', this.plan3);
    CourseData.append('date', this.date);
    CourseData.append('image', this.image);
    CourseData.append('description', this.discription);
    console.log(CourseData, ';;;;;;;;;;;;;;;;;;;;;;');

    this.service.addCourse(CourseData).subscribe(
      (response) => {
        if (!response) {
          window.alert('Form not submitted');
        } else {
          window.alert('Form submitted');
          this.router.navigate(['']);
        }
      },
      (error) => {
        console.error(error);
        window.alert('An error occurred');
      }
    );
  }
}
