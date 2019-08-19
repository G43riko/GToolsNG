import {Component, forwardRef, Inject, Input, OnInit} from "@angular/core";
import {MenuContainerComponent} from "../menu-containter/menu-container.component";

@Component({
    selector: "g43-menu-drawer",
    templateUrl: "./menu-drawer.component.html",
    styleUrls: ["./menu-drawer.component.scss"],
    host: {
        "class": "menu-drawer",
        "[style.width.px]": "width",
        "[style.transform]": "'translateX(' + translate + '%)'",
        "[class.left]": "align === 'left'",
        "[class.right]": "align === 'right'",
        "[class.visible]": "visible",
    },
})
export class MenuDrawerComponent implements OnInit {
    @Input() public align: "left" | "right" = "left";
    @Input() public visible = false;
    @Input() public type: "classic" | "moving" | "squash" = "classic";
    private realWidth = 160;

    public constructor(@Inject(forwardRef(() => MenuContainerComponent)) public readonly container: MenuContainerComponent) {
    }

    public get width(): number {
        return this.realWidth;
    }

    @Input()
    public set width(value: number) {
        this.realWidth = value;
    }

    public ngOnInit(): void {
    }

    public get translate(): number {
        if (this.visible) {
            return 0;
        }

        return this.align === "left" ? -100 : 100;
    }

    public close(): void {
        this.visible = false;
        this.container.close(this);
    }

    public open(): void {
        this.visible = true;
        this.container.open(this);
    }

    public toggle(): void {
        this.visible = !this.visible;
        this.visible ? this.container.open(this) : this.container.close(this);
    }
}
