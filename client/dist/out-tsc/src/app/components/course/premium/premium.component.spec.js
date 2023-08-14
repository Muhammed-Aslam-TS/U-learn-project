import { TestBed } from '@angular/core/testing';
import { PremiumComponent } from './premium.component';
describe('PremiumComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PremiumComponent]
        });
        fixture = TestBed.createComponent(PremiumComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=premium.component.spec.js.map