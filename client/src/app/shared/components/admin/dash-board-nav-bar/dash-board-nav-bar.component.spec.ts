import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardNavBarComponent } from './dash-board-nav-bar.component';

describe('DashBoardNavBarComponent', () => {
  let component: DashBoardNavBarComponent;
  let fixture: ComponentFixture<DashBoardNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashBoardNavBarComponent]
    });
    fixture = TestBed.createComponent(DashBoardNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
