import { Component } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent {
  htmlEditor!: string ; 
  object: object | undefined;

  onEditorInit(editor: any) {
    
    this.object = editor.editor.editor

  }

  saveData(){
    console.log(this.object);
  }

}
