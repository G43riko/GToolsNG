import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { G43_TRANSLATE_TOKEN, G43Translation } from '@g43/common';
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

    public currentLang = 'en';

    public constructor(@Optional() @Inject(G43_TRANSLATE_TOKEN) private readonly translationService: G43Translation) {
    }

    public switchLanguage(): void {
        this.currentLang = this.currentLang === 'en' ? 'en' : 'en';
        if (this.translationService && typeof this.translationService.use === 'function') {
            this.translationService.use(this.currentLang);
        }
    }

    public ngOnInit(): void {
    }
}
