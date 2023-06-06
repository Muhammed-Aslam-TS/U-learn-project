import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CourseServiceService } from '../service/course-service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
  providers: [],
})
export class AddCourseComponent {
  // uploadForm!: FormGroup;
  userId = localStorage.getItem("userId")
  constructor(private formBuilder: FormBuilder, private service: CourseServiceService) { }
  uploadForm: FormGroup = new FormGroup({
    courseName: new FormControl(),
    discription: new FormControl(),
    plan1: new FormControl(),
    plan2: new FormControl(),
    plan3: new FormControl(),
    date: new FormControl(),
    Details1: new FormControl(),
    Details2: new FormControl(),
    Details3: new FormControl(),
    Details4: new FormControl(),
    Details5: new FormControl(),    
    Details11: new FormControl(),
    Details21: new FormControl(),
    Details31: new FormControl(),
    Details41: new FormControl(),
    Details51: new FormControl(),    
    Details12: new FormControl(),
    Details22: new FormControl(),
    Details32: new FormControl(),
    Details42: new FormControl(),
    Details52: new FormControl(),
    userId: new FormControl(),
    // file: new FormControl(),
  });


  onSubmit() {
    if (this.uploadForm.valid) {
      // Get the form data
      const formData = this.uploadForm.value;
      

      // Send the form data to the server
      this.service.addCourse(formData,this.userId).subscribe((response) => {
        console.log(response, "response_____________________Form");
      })
    }
  }

}


  //  formData.forEach((value:FormDataEntryValue,key:string)=>{
  //   console.log(`key: ${key}`);
  //   console.log(`value: ${value}`);
  //  })