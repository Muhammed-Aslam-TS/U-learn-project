import { TestBed } from '@angular/core/testing';
import { UserServiceService } from './user-service.service';
describe('UserServiceService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserServiceService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=user-service.service.spec.js.map