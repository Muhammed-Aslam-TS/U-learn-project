import { TestBed } from '@angular/core/testing';
import { AdminLogInComponent } from './admin-log-in.component';
describe('AdminLogInComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AdminLogInComponent]
        });
        fixture = TestBed.createComponent(AdminLogInComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-log-in.component.spec.js.map