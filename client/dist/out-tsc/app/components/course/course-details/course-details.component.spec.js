import { TestBed } from '@angular/core/testing';
import { CourseDetailsComponent } from './course-details.component';
describe('CourseDetailsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CourseDetailsComponent]
        });
        fixture = TestBed.createComponent(CourseDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=course-details.component.spec.js.map