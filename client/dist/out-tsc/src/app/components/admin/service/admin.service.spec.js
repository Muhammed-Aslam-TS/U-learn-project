import { TestBed } from '@angular/core/testing';
import { AdminService } from './admin.service';
describe('AdminService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AdminService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=admin.service.spec.js.map