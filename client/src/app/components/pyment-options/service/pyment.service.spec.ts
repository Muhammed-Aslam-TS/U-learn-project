import { TestBed } from '@angular/core/testing';

import { PymentService } from './pyment.service';

describe('PymentService', () => {
  let service: PymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
