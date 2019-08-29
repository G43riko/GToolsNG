import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {CoreInputComponent} from "../core-input/core-input.component";

import {NumberInputComponent} from "./number-input.component";

describe("NumberInputComponent", () => {
    let component: NumberInputComponent;
    let fixture: ComponentFixture<NumberInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NumberInputComponent,
                CoreInputComponent,
            ],
            imports: [
                ReactiveFormsModule,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NumberInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
