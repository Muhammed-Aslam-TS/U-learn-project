import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FowllowersComponent } from './fowllowers.component';

describe('FowllowersComponent', () => {
  let component: FowllowersComponent;
  let fixture: ComponentFixture<FowllowersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FowllowersComponent]
    });
    fixture = TestBed.createComponent(FowllowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
