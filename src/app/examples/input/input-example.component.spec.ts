import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {G43TestingModule} from "@g43/common";
import {G43InputModule} from "@g43/input";
import {CoreSelectOptionDirective} from "../../../../projects/input/src/lib/components/core-select/core-select-option.directive";
import {CoreSelectComponent} from "../../../../projects/input/src/lib/components/core-select/core-select.component";

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
