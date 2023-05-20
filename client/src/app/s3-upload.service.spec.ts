import { TestBed } from '@angular/core/testing';

import { S3UploadService } from './s3-upload.service';

describe('S3UploadService', () => {
  let service: S3UploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(S3UploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
