import { TestBed } from '@angular/core/testing';
import { UserLoginComponent } from './user-login.component';
describe('UserLoginComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [UserLoginComponent]
        });
        fixture = TestBed.createComponent(UserLoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-login.component.spec.js.map