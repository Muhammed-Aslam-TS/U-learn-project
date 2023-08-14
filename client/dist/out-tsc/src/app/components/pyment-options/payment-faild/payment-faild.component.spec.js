import { TestBed } from '@angular/core/testing';
import { PaymentFaildComponent } from './payment-faild.component';
describe('PaymentFaildComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PaymentFaildComponent]
        });
        fixture = TestBed.createComponent(PaymentFaildComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=payment-faild.component.spec.js.map