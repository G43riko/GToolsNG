import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {G43TestingModule} from "@common";
import {CoreSelectComponent, CoreSelectOptionDirective, G43InputModule} from "@input";

import {InputExampleComponent} from "./input-example.component";
import {TestButtonComponent} from "./test-button/test-button.component";
import {TestCoreInputComponent} from "./test-core-input/test-core-input.component";
import {TestCoreSelectComponent} from "./test-core-select/test-core-select.component";

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
                TestCoreSelectComponent,
                InputExampleComponent,
                CoreSelectComponent,
                CoreSelectOptionDirective,
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
