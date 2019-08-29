import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {MenuContainerComponent} from "../menu-containter/menu-container.component";

import {MenuDrawerComponent} from "./menu-drawer.component";

xdescribe("MenuDrawerComponent", () => {
    let component: MenuDrawerComponent;
    let fixture: ComponentFixture<MenuDrawerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MenuDrawerComponent,
                MenuContainerComponent,
            ],
            providers: [],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuDrawerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
