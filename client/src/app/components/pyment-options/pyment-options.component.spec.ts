import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PymentOptionsComponent } from './pyment-options.component';

describe('PymentOptionsComponent', () => {
  let component: PymentOptionsComponent;
  let fixture: ComponentFixture<PymentOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PymentOptionsComponent]
    });
    fixture = TestBed.createComponent(PymentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
