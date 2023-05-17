import { Router } from '@angular/router';
import { CourseServiceService } from './../service/course-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TextEditorComponent } from '../text-editor/text-editor.component';
import { Editor } from 'primeng/editor';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
  providers: [],
})
export class AddCourseComponent {
  constructor(
    private formBuilder: FormBuilder,
    private service: CourseServiceService,
    private router: Router
  ) { }


  submit = false
  formData = {}
  // htmlEditor!: string;
  // object: object | undefined;

  CourseData = this.formBuilder.group({
    courseName: ['', Validators.required],
    date: new FormControl('', [Validators.required]),
    plan1: new FormControl('', [Validators.required]),
    plan2: new FormControl('', [Validators.required]),
    plan3: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })

  get f() {
    return this.CourseData.controls
  }


  onsubmit() {
    this.submit = true
    this.formData = this.CourseData.value

    this.service.addCourse(this.formData).subscribe((data) => {
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

