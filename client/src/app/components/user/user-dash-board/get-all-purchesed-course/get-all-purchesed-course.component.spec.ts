import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPurchesedCourseComponent } from './get-all-purchesed-course.component';

describe('GetAllPurchesedCourseComponent', () => {
  let component: GetAllPurchesedCourseComponent;
  let fixture: ComponentFixture<GetAllPurchesedCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllPurchesedCourseComponent]
    });
    fixture = TestBed.createComponent(GetAllPurchesedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
