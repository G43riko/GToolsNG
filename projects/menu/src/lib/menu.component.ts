import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { GT_TRANSLATE_TOKEN, GTTranslation } from '@gt-common';
import { of } from 'rxjs';
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

    public constructor(private readonly router: Router,
                       @Optional() @Inject(GT_TRANSLATE_TOKEN) private readonly translationService: GTTranslation) {
    }

    public ngOnInit(): void {
    }

    public getLabelFor(menuItem: MenuItem) {
        if (this.translationService && this.translationService.exists(menuItem.label)) {
            return this.translationService.get(menuItem.label);
        }

        return of(menuItem.label);
    }


    public process(menuItem: MenuItem): void {
        this.router.navigate([menuItem.url]);
    }

}
