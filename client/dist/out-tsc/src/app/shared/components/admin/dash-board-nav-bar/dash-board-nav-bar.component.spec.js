import { TestBed } from '@angular/core/testing';
import { DashBoardNavBarComponent } from './dash-board-nav-bar.component';
describe('DashBoardNavBarComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DashBoardNavBarComponent]
        });
        fixture = TestBed.createComponent(DashBoardNavBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dash-board-nav-bar.component.spec.js.map