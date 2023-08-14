import { TestBed } from '@angular/core/testing';
import { GetAllCoursesComponent } from './get-all-courses.component';
describe('GetAllCoursesComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [GetAllCoursesComponent]
        });
        fixture = TestBed.createComponent(GetAllCoursesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=get-all-courses.component.spec.js.map