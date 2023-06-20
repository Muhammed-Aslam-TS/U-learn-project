import { TestBed } from '@angular/core/testing';
import { CourseServiceService } from './course-service.service';
describe('CourseServiceService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CourseServiceService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=course-service.service.spec.js.map