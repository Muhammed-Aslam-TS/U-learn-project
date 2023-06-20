import { TestBed } from '@angular/core/testing';
import { AddCourseComponent } from './add-course.component';
describe('AddCourseComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AddCourseComponent]
        });
        fixture = TestBed.createComponent(AddCourseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-course.component.spec.js.map