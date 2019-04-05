import { Component } from '@angular/core';
import { menuItems } from './menu-items';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public readonly menuItems = menuItems;
    public title = 'GToolsNG';

    public constructor() {
    }
}
