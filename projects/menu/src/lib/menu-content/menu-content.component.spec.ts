import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {MenuContainerComponent} from "../menu-containter/menu-container.component";

import {MenuContentComponent} from "./menu-content.component";

xdescribe("MenuContentComponent", () => {
    let component: MenuContentComponent;
    let fixture: ComponentFixture<MenuContentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MenuContentComponent,
                MenuContainerComponent,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
