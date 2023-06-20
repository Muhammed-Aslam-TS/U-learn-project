import { TestBed } from '@angular/core/testing';
import { PostService } from './post.service';
describe('PostService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PostService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=post.service.spec.js.map