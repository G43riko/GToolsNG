import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {G43TestingModule} from "@g43/common";
import {G43InputModule} from "@g43/input";

import {InputExampleComponent} from "./input-example.component";
import {TestButtonComponent} from "./test-button/test-button.component";
import {TestCoreInputComponent} from "./test-core-input/test-core-input.component";

describe("InputExampleComponent", () => {
    let component: InputExampleComponent;
    let fixture: ComponentFixture<InputExampleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                G43TestingModule,
                G43InputModule,
            ],
            declarations: [
                TestCoreInputComponent,
                TestButtonComponent,
                InputExampleComponent,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
