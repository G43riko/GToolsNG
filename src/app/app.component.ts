import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { menuItems } from './menu-items';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public readonly menuItems = menuItems;
    public title = 'GToolsNG';

    public constructor(translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
}

