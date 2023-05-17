import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from './../service/course-service.service';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent {

  constructor(private service: CourseServiceService) { }
  htmlEditor!: string;
  object: object | undefined;

  onEditorInit(editor: any) {
    this.object = editor.editor.editor
  }

  saveData() {
    console.log(this.object);
    this.service.addTextEdtor(this.object).subscribe((data) => {
      console.log(data);

    })
  }

}
