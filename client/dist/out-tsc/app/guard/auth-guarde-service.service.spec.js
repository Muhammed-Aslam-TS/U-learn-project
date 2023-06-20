import { TestBed } from '@angular/core/testing';
import { AuthGuardeServiceService } from './auth-guarde-service.service';
describe('AuthGuardeServiceService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AuthGuardeServiceService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=auth-guarde-service.service.spec.js.map