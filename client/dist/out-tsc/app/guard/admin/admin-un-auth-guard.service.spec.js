import { TestBed } from '@angular/core/testing';
import { AdminUnAuthGuardService } from './admin-un-auth-guard.service';
describe('AdminUnAuthGuardService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AdminUnAuthGuardService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=admin-un-auth-guard.service.spec.js.map