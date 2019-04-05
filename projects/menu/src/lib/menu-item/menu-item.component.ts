import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { GT_TRANSLATE_TOKEN, GTTranslation } from '../../../../gt-common/src/lib/services/gt-translate/gt-translation.interface';
import { MenuItem } from '../models/menu-item.model';

@Component({
    selector: 'gt-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
    @Input() public menuItem: MenuItem;

    public constructor(private readonly router: Router,
                       @Optional() @Inject(GT_TRANSLATE_TOKEN) private readonly translationService: GTTranslation) {
    }

    public ngOnInit(): void {
    }


    public get label() {
        if (this.translationService.exists(this.menuItem.label)) {
            return this.translationService.get(this.menuItem.label);
        }

        return of(this.menuItem.label);
    }

    public process(menuItem: MenuItem): void {
        this.router.navigate([menuItem.url]);
    }

}
