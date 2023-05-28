import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CourseServiceService } from '../service/course-service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
  providers: [],
})
export class AddCourseComponent  {
  uploadForm: FormGroup;
  selectedFile: any;

  constructor(private formBuilder: FormBuilder, private service: CourseServiceService) {
    this.uploadForm = this.formBuilder.group({
      courseName: '',
      plan1: '',
      plan2: '',
      plan3: '',
      date: '',
      file: null,
      discription: ''
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile, 'Selected File');
  }

  onSubmit() {
    if (this.uploadForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('name', this.uploadForm.value.courseName);
      formData.append('plan1', this.uploadForm.value.plan1);
      formData.append('plan2', this.uploadForm.value.plan2);
      formData.append('plan3', this.uploadForm.value.plan3);
      formData.append('discription', this.uploadForm.value.discription);
      formData.append('file', this.selectedFile);
      
   formData.forEach((value:FormDataEntryValue,key:string)=>{
    console.log(`key: ${key}`);
    console.log(`value: ${value}`);
   })

   console.log(formData.getAll,'2222222222222222222222222222');

      this.service.addCourse(formData).subscribe((response) => {
          console.log(response);
        },
        (error) => {
          console.log('Error uploading file:', error);
        }
      );
    }
  }
}
