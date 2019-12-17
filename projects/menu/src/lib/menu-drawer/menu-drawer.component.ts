import {Component, Input, OnInit} from "@angular/core";
import {MenuServiceService} from "@menu/lib/menu-service.service";

@Component({
    selector: "g43-menu-drawer",
    templateUrl: "./menu-drawer.component.html",
    styleUrls: ["./menu-drawer.component.scss"],
    host: {
        "[style.width.px]": "width",
        "[style.background-color]": "background",
        "[style.padding-top.px]": "menuServiceService.topOffset",
        "[class]": "'menu-drawer ' + align",
        "[class.visible]": "visible",
        "[style.display]": "loaded ? 'block' : 'none'",
    },
})
export class MenuDrawerComponent implements OnInit {
    @Input() public align: "left" | "right" = "left";
    @Input() public visible = false;
    @Input() public background = "aliceblue";
    @Input() public type: "classic" | "moving" | "squash" = "classic";
    private realWidth = 160;
    public loaded = false;

    public constructor(public readonly menuServiceService: MenuServiceService) {
    }

    public get width(): number {
        return this.realWidth;
    }

    @Input()
    public set width(value: number) {
        this.realWidth = Math.min(value, window.innerWidth);
    }

    public ngOnInit(): void {
        setTimeout(() => {
            this.loaded = true;
        }, 1000);
    }

    public close(): void {
        this.visible = false;
        this.menuServiceService.close(this);
    }

    public open(): void {
        this.visible = true;
        this.menuServiceService.open(this);
    }

    public toggle(): void {
        this.visible = !this.visible;
        this.visible ? this.menuServiceService.open(this) : this.menuServiceService.close(this);
    }
}
