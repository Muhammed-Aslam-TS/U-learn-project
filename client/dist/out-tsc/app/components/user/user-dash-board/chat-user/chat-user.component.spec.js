import { TestBed } from '@angular/core/testing';
import { ChatUserComponent } from './chat-user.component';
describe('ChatUserComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ChatUserComponent]
        });
        fixture = TestBed.createComponent(ChatUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=chat-user.component.spec.js.map