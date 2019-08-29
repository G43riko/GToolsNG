import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {G43TestingModule} from "@g43/common";
import {MenuItemComponent} from "./menu-item/menu-item.component";

import {MenuComponent} from "./menu.component";

describe("MenuComponent", () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                G43TestingModule,
            ],
            declarations: [
                MenuComponent,
                MenuItemComponent,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
