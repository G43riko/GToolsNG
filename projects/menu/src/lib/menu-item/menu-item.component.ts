import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../models/menu-item.model';

@Component({
    selector: 'gt-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
    @Input() public menuItem: MenuItem;

    public constructor(private readonly router: Router) {
    }

    public ngOnInit(): void {
    }


    public process(menuItem: MenuItem): void {
        this.router.navigate([menuItem.url]);
    }

}
