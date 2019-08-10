import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {G43TestingModule} from "@g43/common";

import { InputExampleComponent } from "./input-example.component";

describe("InputExampleComponent", () => {
    let component: InputExampleComponent;
    let fixture: ComponentFixture<InputExampleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                G43TestingModule,
                FormsModule,
                ReactiveFormsModule,
            ],
            declarations: [
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
