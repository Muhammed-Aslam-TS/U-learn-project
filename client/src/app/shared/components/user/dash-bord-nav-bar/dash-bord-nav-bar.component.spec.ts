import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBordNavBarComponent } from './dash-bord-nav-bar.component';

describe('DashBordNavBarComponent', () => {
  let component: DashBordNavBarComponent;
  let fixture: ComponentFixture<DashBordNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashBordNavBarComponent]
    });
    fixture = TestBed.createComponent(DashBordNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
