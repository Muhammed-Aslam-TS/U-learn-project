import { TestBed } from '@angular/core/testing';
import { PaymentDetailsComponent } from './payment-details.component';
describe('PaymentDetailsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PaymentDetailsComponent]
        });
        fixture = TestBed.createComponent(PaymentDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=payment-details.component.spec.js.map