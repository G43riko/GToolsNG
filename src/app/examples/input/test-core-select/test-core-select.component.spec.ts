import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {CoreSelectOptionDirective} from "../../../../../projects/input/src/lib/components/core-select/core-select-option.directive";
import {CoreSelectComponent} from "../../../../../projects/input/src/lib/components/core-select/core-select.component";
import {AppTestingModule} from "../../../tests/app-testing.module";

import {TestCoreSelectComponent} from "./test-core-select.component";

describe("TestCoreSelectComponent", () => {
    let component: TestCoreSelectComponent;
    let fixture: ComponentFixture<TestCoreSelectComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule,
            ],
            declarations: [
                TestCoreSelectComponent,
                CoreSelectComponent,
                CoreSelectOptionDirective,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestCoreSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
