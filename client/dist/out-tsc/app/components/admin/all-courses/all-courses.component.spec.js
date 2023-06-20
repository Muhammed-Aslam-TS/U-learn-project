import { TestBed } from '@angular/core/testing';
import { AllCoursesComponent } from './all-courses.component';
describe('AllCoursesComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AllCoursesComponent]
        });
        fixture = TestBed.createComponent(AllCoursesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=all-courses.component.spec.js.map