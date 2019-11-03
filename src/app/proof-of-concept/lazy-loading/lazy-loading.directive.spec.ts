import {ComponentFixture, TestBed} from "@angular/core/testing";
import {LazyLoadingDirective} from "./lazy-loading.directive";

describe("LazyLoadingDirective", () => {
    let fixture: ComponentFixture<LazyLoadingDirective>;
    let directive: LazyLoadingDirective;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LazyLoadingDirective]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LazyLoadingDirective);
        directive = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create an instance", () => {
        expect(directive).toBeTruthy();
    });
});
