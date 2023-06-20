import { TestBed } from '@angular/core/testing';
import { ChatServiceService } from './chat-service.service';
describe('ChatServiceService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ChatServiceService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=chat-service.service.spec.js.map