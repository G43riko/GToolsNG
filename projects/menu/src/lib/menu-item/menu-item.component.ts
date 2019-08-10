import {Component, Inject, Input, OnInit, Optional} from "@angular/core";
import {Router} from "@angular/router";
import {G43_TRANSLATE_TOKEN, G43Translation} from "@g43/common";
import {of} from "rxjs";
import {MenuItem} from "../models/menu-item.model";

@Component({
    selector: "g43-menu-item",
    templateUrl: "./menu-item.component.html",
    styleUrls: ["./menu-item.component.scss"]
})
export class MenuItemComponent implements OnInit {
    @Input() public menuItem: MenuItem;

    public constructor(private readonly router: Router,
                       @Optional() @Inject(G43_TRANSLATE_TOKEN) private readonly translationService: G43Translation) {
    }

    public ngOnInit(): void {
    }

    public getLabelFor(menuItem: MenuItem) {
        if (this.translationService) {
            return this.translationService.get(menuItem.label);
        }

        return of(menuItem.label);
    }

    public click(): any {
        if (!this.menuItem) {
            return;
        }

        if (typeof this.menuItem.action === "string") {
            return this.router.navigate([this.menuItem.action]);
        }
        if (typeof this.menuItem.action === "function") {
            return this.menuItem.action();
        }
    }

}
