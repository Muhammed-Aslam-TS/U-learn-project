import { TestBed } from '@angular/core/testing';
import { CourseDisplayComponent } from './course-display.component';
describe('CourseDisplayComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CourseDisplayComponent]
        });
        fixture = TestBed.createComponent(CourseDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=course-display.component.spec.js.map