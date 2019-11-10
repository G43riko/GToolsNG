import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {TableMakerModule} from "@g43/table";

import {HugeTableFramedComponent} from "./huge-table.component";

describe("HugeTableComponent", () => {
    let component: HugeTableFramedComponent;
    let fixture: ComponentFixture<HugeTableFramedComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                TableMakerModule,
            ],
            declarations: [
                HugeTableFramedComponent,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HugeTableFramedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
