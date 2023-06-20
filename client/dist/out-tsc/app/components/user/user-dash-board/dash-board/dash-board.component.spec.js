import { TestBed } from '@angular/core/testing';
import { DashBoardComponent } from './dash-board.component';
describe('DashBoardComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DashBoardComponent]
        });
        fixture = TestBed.createComponent(DashBoardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dash-board.component.spec.js.map