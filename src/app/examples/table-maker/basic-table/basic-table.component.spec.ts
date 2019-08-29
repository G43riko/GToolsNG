import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {G43CommonModule} from "@g43/common";
import {TableMakerModule} from "@g43/table";
import {AppTestingModule} from "../../../tests/app-testing.module";

import {BasicTableComponent} from "./basic-table.component";

describe("BasicTableComponent", () => {
    let component: BasicTableComponent;
    let fixture: ComponentFixture<BasicTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule,
                TableMakerModule,
                G43CommonModule,
            ],
            declarations: [
                BasicTableComponent,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BasicTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
