import { TestBed } from '@angular/core/testing';

import { AdminUnAuthGuardService } from './admin-un-auth-guard.service';

describe('AdminUnAuthGuardService', () => {
  let service: AdminUnAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminUnAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
