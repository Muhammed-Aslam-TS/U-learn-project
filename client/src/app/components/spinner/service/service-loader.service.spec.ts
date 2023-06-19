import { TestBed } from '@angular/core/testing';

import { ServiceLoaderService } from './service-loader.service';

describe('ServiceLoaderService', () => {
  let service: ServiceLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
