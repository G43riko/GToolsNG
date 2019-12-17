import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {G43TestingModule} from "@g43/common";
import {G43InputModule} from "../../g43-input.module";

import {CoreInputComponent} from "./core-input.component";

describe("CoreInputComponent", () => {
    let component: CoreInputComponent;
    let fixture: ComponentFixture<CoreInputComponent<any>>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                G43TestingModule,
                FormsModule,
                ReactiveFormsModule,
                G43InputModule,
            ],
            declarations: [
                CoreInputComponent,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoreInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
