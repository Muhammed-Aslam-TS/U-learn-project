import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreCourseDetailsComponent } from './more-course-details.component';

describe('MoreCourseDetailsComponent', () => {
  let component: MoreCourseDetailsComponent;
  let fixture: ComponentFixture<MoreCourseDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreCourseDetailsComponent]
    });
    fixture = TestBed.createComponent(MoreCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
