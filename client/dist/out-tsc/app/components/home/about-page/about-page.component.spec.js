import { TestBed } from '@angular/core/testing';
import { AboutPageComponent } from './about-page.component';
describe('AboutPageComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AboutPageComponent]
        });
        fixture = TestBed.createComponent(AboutPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=about-page.component.spec.js.map