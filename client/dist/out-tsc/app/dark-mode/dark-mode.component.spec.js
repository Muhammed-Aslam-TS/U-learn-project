import { TestBed } from '@angular/core/testing';
import { DarkModeComponent } from './dark-mode.component';
describe('DarkModeComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DarkModeComponent]
        });
        fixture = TestBed.createComponent(DarkModeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dark-mode.component.spec.js.map