import { TestBed } from '@angular/core/testing';
import { PymentOptionsComponent } from './pyment-options.component';
describe('PymentOptionsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PymentOptionsComponent]
        });
        fixture = TestBed.createComponent(PymentOptionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pyment-options.component.spec.js.map