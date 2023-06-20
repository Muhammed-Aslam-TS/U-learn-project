import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TextEditorComponent = class TextEditorComponent {
    constructor(service) {
        this.service = service;
    }
    onEditorInit(editor) {
        this.object = editor.editor.editor;
    }
    saveData() {
        console.log(this.object);
        // this.service.addTextEdtor(this.object).subscribe((data) => {
        //   console.log(data);
        // })
    }
};
TextEditorComponent = __decorate([
    Component({
        selector: 'app-text-editor',
        templateUrl: './text-editor.component.html',
        styleUrls: ['./text-editor.component.css']
    })
], TextEditorComponent);
export { TextEditorComponent };
//# sourceMappingURL=text-editor.component.js.map