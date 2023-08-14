import { TestBed } from '@angular/core/testing';
import { SpinnerComponent } from './spinner.component';
describe('SpinnerComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SpinnerComponent]
        });
        fixture = TestBed.createComponent(SpinnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=spinner.component.spec.js.map