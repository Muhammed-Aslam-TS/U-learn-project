import { Component } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class AddCourseComponent {
//  firstFormGroup = this._formBuilder.group({
//     firstCtrl: ['', Validators.required],
//   });
//   secondFormGroup = this._formBuilder.group({
//     secondCtrl: '',
//   });
//   isOptional = false;

//   constructor(private _formBuilder: FormBuilder) {}

firstFormGroup = this._formBuilder.group({
  firstCtrl: ['', Validators.required],
});
secondFormGroup = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});

constructor(private _formBuilder: FormBuilder) {}



}
// }
