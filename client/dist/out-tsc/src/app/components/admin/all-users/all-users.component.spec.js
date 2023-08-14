import { TestBed } from '@angular/core/testing';
import { AllUsersComponent } from './all-users.component';
describe('AllUsersComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AllUsersComponent]
        });
        fixture = TestBed.createComponent(AllUsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=all-users.component.spec.js.map