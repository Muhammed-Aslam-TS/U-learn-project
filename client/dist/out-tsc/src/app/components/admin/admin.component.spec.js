import { TestBed } from '@angular/core/testing';
import { AdminComponent } from './admin.component';
describe('AdminComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AdminComponent]
        });
        fixture = TestBed.createComponent(AdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin.component.spec.js.map