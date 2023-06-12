import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatastCoursesComponent } from './latast-courses.component';

describe('LatastCoursesComponent', () => {
  let component: LatastCoursesComponent;
  let fixture: ComponentFixture<LatastCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatastCoursesComponent]
    });
    fixture = TestBed.createComponent(LatastCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
