import { TestBed } from '@angular/core/testing';
import { MoreCourseDetailsComponent } from './more-course-details.component';
describe('MoreCourseDetailsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MoreCourseDetailsComponent]
        });
        fixture = TestBed.createComponent(MoreCourseDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=more-course-details.component.spec.js.map