import { TestBed } from '@angular/core/testing';
import { UlearnBannerComponent } from './ulearn-banner.component';
describe('UlearnBannerComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [UlearnBannerComponent]
        });
        fixture = TestBed.createComponent(UlearnBannerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ulearn-banner.component.spec.js.map