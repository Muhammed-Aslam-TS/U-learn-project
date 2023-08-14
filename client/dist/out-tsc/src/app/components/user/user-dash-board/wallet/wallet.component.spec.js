import { TestBed } from '@angular/core/testing';
import { WalletComponent } from './wallet.component';
describe('WalletComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [WalletComponent]
        });
        fixture = TestBed.createComponent(WalletComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=wallet.component.spec.js.map