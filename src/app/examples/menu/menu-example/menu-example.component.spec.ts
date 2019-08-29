import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {ReactiveFormsModule} from "@angular/forms";

import {MenuExampleComponent} from "./menu-example.component";

describe("MenuExampleComponent", () => {
    let component: MenuExampleComponent;
    let fixture: ComponentFixture<MenuExampleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MenuExampleComponent,
            ],
            imports: [
                ReactiveFormsModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
