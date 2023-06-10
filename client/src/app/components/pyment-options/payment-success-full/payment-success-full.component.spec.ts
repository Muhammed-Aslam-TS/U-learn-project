import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSuccessFullComponent } from './payment-success-full.component';

describe('PaymentSuccessFullComponent', () => {
  let component: PaymentSuccessFullComponent;
  let fixture: ComponentFixture<PaymentSuccessFullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentSuccessFullComponent]
    });
    fixture = TestBed.createComponent(PaymentSuccessFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
