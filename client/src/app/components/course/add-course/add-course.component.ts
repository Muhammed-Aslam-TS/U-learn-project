import { Router } from '@angular/router';
import { CourseServiceService } from './../service/course-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environments.prod';
import { UploadResponse } from 'aws-s3-upload-ash/dist/types';
import AWSS3UploadAshClient from 'aws-s3-upload-ash';
// import * as AWS from 'aws-sdk';



@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
  providers: [],
})
export class AddCourseComponent {
  event: any;

  // private s3: AWS.S3;
  constructor(
    private formBuilder: FormBuilder,
    private service: CourseServiceService,
    private router: Router,
  ) {
  }

  fileSelected: any = null



  // S3CustomClient: AWSS3UploadAshClient = new AWSS3UploadAshClient(this.config);

  submit = false
  images: any = null;
  multyImages = []



  CourseData = this.formBuilder.group({
    courseName: ['', Validators.required],
    plan1: ['', Validators.required],
    plan2: ['', Validators.required],
    plan3: ['', Validators.required],
    date: ['', Validators.required],
    description: ['', Validators.required]
  })

  get f() {
    return this.CourseData.controls
  }



  onFileSelecete(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    
  }

  onsubmit() {

    this.CourseData = this.images

      const data = this.CourseData



    this.service.addCourse(data).subscribe((data) => {
      if (!data) {
        window.alert('form not Submitted')
      } else {
        if (data) {
          window.alert('form Submitted')
          this.router.navigate(['']);
        } else {
          this.router.navigate(['addCourse']);
        }
      }
    });
  }



}




