import { TestBed } from '@angular/core/testing';
import { ChatBoxComponent } from './chat-box.component';
describe('ChatBoxComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ChatBoxComponent]
        });
        fixture = TestBed.createComponent(ChatBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=chat-box.component.spec.js.map