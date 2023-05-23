import { TestBed } from '@angular/core/testing';

import { ChatBosServiceService } from './chat-bos-service.service';

describe('ChatBosServiceService', () => {
  let service: ChatBosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatBosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
