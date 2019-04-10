import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { GT_TRANSLATE_TOKEN, GTTranslation } from '@gt-common';
import { MenuItem } from './models/menu-item.model';

@Component({
    selector: 'gt-menu',
    styleUrls: ['./menu.component.scss'],
    templateUrl: './menu.component.html',
    styles: []
})
export class MenuComponent implements OnInit {
    @Input() public menuItems: MenuItem[] = [MenuItem.create('home'), MenuItem.create('about')];
    public menuWidth = 240;

    public currentLang = 'sk';

    public constructor(@Optional() @Inject(GT_TRANSLATE_TOKEN) private readonly translationService: GTTranslation) {
    }

    public switchLanguage(): void {
        this.currentLang = this.currentLang === 'sk' ? 'en' : 'sk';
        if (this.translationService && typeof this.translationService.use === 'function') {
            this.translationService.use(this.currentLang);
        }
    }

    public ngOnInit(): void {
    }
}
