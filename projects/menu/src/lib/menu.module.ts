import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuComponent } from './menu.component';

@NgModule({
    declarations: [
        MenuComponent,
        MenuItemComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        MenuComponent
    ]
})
export class MenuModule {
}
