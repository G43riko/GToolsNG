import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {TestCoreSelectComponent} from "./test-core-select.component";

describe("TestCoreSelectComponent", () => {
    let component: TestCoreSelectComponent;
    let fixture: ComponentFixture<TestCoreSelectComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestCoreSelectComponent]
        })
            .compileComponents();
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
