import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {CoreSelectOptionDirective} from "./core-select-option.directive";

import {CoreSelectComponent} from "./core-select.component";

describe("CoreSelectComponent", () => {
    let component: CoreSelectComponent;
    let fixture: ComponentFixture<CoreSelectComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CoreSelectComponent,
                CoreSelectOptionDirective,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoreSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
