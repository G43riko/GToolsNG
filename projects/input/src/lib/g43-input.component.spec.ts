import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {G43InputComponent} from "./g43-input.component";

describe("G43InputComponent", () => {
    let component: G43InputComponent;
    let fixture: ComponentFixture<G43InputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [G43InputComponent]
        })
               .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(G43InputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
