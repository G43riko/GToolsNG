import {Component, Inject, Input, OnInit, Optional, TemplateRef} from "@angular/core";
import { G43_TRANSLATE_TOKEN, G43Translation } from "@g43/common";
import { MenuItem } from "./models/menu-item.model";

@Component({
    selector: "g43-menu",
    styleUrls: ["./menu.component.scss"],
    templateUrl: "./menu.component.html",
    styles: []
})
export class MenuComponent implements OnInit {
    @Input() public menuItems: MenuItem[] = [MenuItem.create("home"), MenuItem.create("about")];
    @Input() public content: TemplateRef<any>;
    public menuWidth = 140;


    public constructor(@Optional() @Inject(G43_TRANSLATE_TOKEN) private readonly translationService: G43Translation) {
    }


    public ngOnInit(): void {
    }
}
