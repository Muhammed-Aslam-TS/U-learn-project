import { TestBed } from '@angular/core/testing';
import { MyCoursesComponent } from './my-courses.component';
describe('MyCoursesComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MyCoursesComponent]
        });
        fixture = TestBed.createComponent(MyCoursesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=my-courses.component.spec.js.map