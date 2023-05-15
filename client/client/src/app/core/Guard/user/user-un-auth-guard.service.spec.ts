import { TestBed } from '@angular/core/testing';

import { UserUnAuthGuardService } from './user-un-auth-guard.service';

describe('UserUnAuthGuardService', () => {
  let service: UserUnAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserUnAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
