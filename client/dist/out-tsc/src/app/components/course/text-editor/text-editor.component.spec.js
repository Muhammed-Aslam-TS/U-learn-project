import { TestBed } from '@angular/core/testing';
import { TextEditorComponent } from './text-editor.component';
describe('TextEditorComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TextEditorComponent]
        });
        fixture = TestBed.createComponent(TextEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=text-editor.component.spec.js.map