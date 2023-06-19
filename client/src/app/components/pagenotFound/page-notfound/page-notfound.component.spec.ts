import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNOtfoundComponent } from './page-notfound.component';

describe('PageNOtfoundComponent', () => {
  let component: PageNOtfoundComponent;
  let fixture: ComponentFixture<PageNOtfoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNOtfoundComponent]
    });
    fixture = TestBed.createComponent(PageNOtfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
