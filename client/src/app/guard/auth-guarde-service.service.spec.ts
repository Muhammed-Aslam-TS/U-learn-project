import { TestBed } from '@angular/core/testing';

import { AuthGuardeServiceService } from './auth-guarde-service.service';

describe('AuthGuardeServiceService', () => {
  let service: AuthGuardeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
