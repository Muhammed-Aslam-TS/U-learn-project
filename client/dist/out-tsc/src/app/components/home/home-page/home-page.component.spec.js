import { TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
describe('HomePageComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomePageComponent]
        });
        fixture = TestBed.createComponent(HomePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=home-page.component.spec.js.map