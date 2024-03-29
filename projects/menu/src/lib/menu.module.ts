import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MenuContainerComponent} from "./menu-containter/menu-container.component";
import {MenuContentComponent} from "./menu-content/menu-content.component";
import {MenuDrawerComponent} from "./menu-drawer/menu-drawer.component";
import {MenuItemComponent} from "./menu-item/menu-item.component";
import {MenuTopComponent} from "./menu-top/menu-top.component";
import {MenuComponent} from "./menu.component";

@NgModule({
    declarations: [
        MenuComponent,
        MenuItemComponent,
        MenuContentComponent,
        MenuDrawerComponent,
        MenuContainerComponent,
        MenuTopComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        MenuComponent,
        MenuContentComponent,
        MenuDrawerComponent,
        MenuContainerComponent,
        MenuItemComponent,
        MenuTopComponent,
    ]
})
export class MenuModule {
}
