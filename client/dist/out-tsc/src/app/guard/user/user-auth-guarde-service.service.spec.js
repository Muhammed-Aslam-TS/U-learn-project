import { TestBed } from '@angular/core/testing';
import { UserAuthGuardeServiceService } from './user-auth-guarde-service.service';
describe('UserAuthGuardeServiceService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserAuthGuardeServiceService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=user-auth-guarde-service.service.spec.js.map