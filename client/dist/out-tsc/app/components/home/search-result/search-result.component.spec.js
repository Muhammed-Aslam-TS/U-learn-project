import { TestBed } from '@angular/core/testing';
import { SearchResultComponent } from './search-result.component';
describe('SearchResultComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SearchResultComponent]
        });
        fixture = TestBed.createComponent(SearchResultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=search-result.component.spec.js.map