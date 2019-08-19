import {Component, forwardRef, Inject, OnInit} from "@angular/core";
import {MenuContainerComponent} from "../menu-containter/menu-container.component";

@Component({
    selector: "g43-menu-content",
    templateUrl: "./menu-content.component.html",
    styleUrls: ["./menu-content.component.scss"],
    host: {
        "[style.margin-top.px]": "container.topMenu ? container.topMenu.height : 0",
        "[style.left.px]": "container.contentLeft",
        "[style.margin-right.px]": "container.contentMarginRight",
        "[style.filter]": "container.realFilter"
    }
})
export class MenuContentComponent implements OnInit {

    public constructor(@Inject(forwardRef(() => MenuContainerComponent)) public readonly container: MenuContainerComponent) {
    }

    public ngOnInit(): void {
    }

}
