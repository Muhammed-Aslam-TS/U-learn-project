import { TestBed } from '@angular/core/testing';
import { UserUnAuthGuardeServiceService } from './user-un-auth-guarde-service.service';
describe('UserUnAuthGuardeServiceService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserUnAuthGuardeServiceService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=user-un-auth-guarde-service.service.spec.js.map