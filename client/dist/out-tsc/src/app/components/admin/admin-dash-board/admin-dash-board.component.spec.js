import { TestBed } from '@angular/core/testing';
import { AdminDashBoardComponent } from './admin-dash-board.component';
describe('AdminDashBoardComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AdminDashBoardComponent]
        });
        fixture = TestBed.createComponent(AdminDashBoardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-dash-board.component.spec.js.map