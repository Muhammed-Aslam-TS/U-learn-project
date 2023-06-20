import { TestBed } from '@angular/core/testing';
import { SubscribesComponent } from './subscribes.component';
describe('SubscribesComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SubscribesComponent]
        });
        fixture = TestBed.createComponent(SubscribesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=subscribes.component.spec.js.map