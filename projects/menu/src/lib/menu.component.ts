import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from './models/menu-item.model';

@Component({
    selector: 'gt-menu',
    styleUrls: ['./menu.component.scss'],
    templateUrl: './menu.component.html',
    styles: []
})
export class MenuComponent implements OnInit {
    public menuItems: MenuItem[] = [MenuItem.link('home'), MenuItem.link('about')];
    public menuWidth = 240;

    public constructor(private readonly router: Router) {
    }

    public ngOnInit(): void {
    }

    public process(menuItem: MenuItem): void {
        this.router.navigate([menuItem.url]);
    }

}
