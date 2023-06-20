import { TestBed } from '@angular/core/testing';
import { UserRegisterComponent } from './user-register.component';
describe('UserRegisterComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [UserRegisterComponent]
        });
        fixture = TestBed.createComponent(UserRegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-register.component.spec.js.map