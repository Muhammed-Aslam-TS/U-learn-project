import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlearnBannerComponent } from './ulearn-banner.component';

describe('UlearnBannerComponent', () => {
  let component: UlearnBannerComponent;
  let fixture: ComponentFixture<UlearnBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UlearnBannerComponent]
    });
    fixture = TestBed.createComponent(UlearnBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
