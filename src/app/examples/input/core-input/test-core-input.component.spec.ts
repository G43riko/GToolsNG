import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {G43InputComponent} from "@g43/input";
import {AppTestingModule} from "../../../tests/app-testing.module";
import {TestCoreInputComponent} from "./test-core-input.component";


xdescribe("CoreInputComponent", () => {
    let component: TestCoreInputComponent;
    let fixture: ComponentFixture<TestCoreInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestCoreInputComponent,
                G43InputComponent,
            ],
            imports: [
                AppTestingModule,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestCoreInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
