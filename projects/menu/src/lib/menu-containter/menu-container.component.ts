import {Component, ContentChild, ContentChildren, HostListener, Input, OnInit, QueryList} from "@angular/core";
import {MenuDrawerComponent} from "../menu-drawer/menu-drawer.component";
import {MenuTopComponent} from "../menu-top/menu-top.component";

@Component({
    selector: "g43-menu-container",
    templateUrl: "./menu-container.component.html",
    styleUrls: ["./menu-container.component.scss"],
})
export class MenuContainerComponent implements OnInit {
    @Input() public filter;
    @Input() public backdrop = true;
    @ContentChildren(MenuDrawerComponent) private drawers: QueryList<MenuDrawerComponent>;
    @ContentChild(MenuTopComponent, {static: false}) public topMenu: MenuTopComponent;

    private openDrawer: MenuDrawerComponent;

    public get isShowingBackdrop(): boolean {
        return this.backdrop && this.drawerVisible;
    }

    public get backdropLeft(): number {
        if (!this.drawerVisible) {
            return 0;
        }

        return this.openDrawer.align === "right" ? -this.openDrawer.width : this.openDrawer.width;
    }

    public get contentLeft(): number {
        if (!this.drawerVisible) {
            return 0;
        }

        if (this.openDrawer.type === "classic") {
            return 0;
        }

        if (this.openDrawer.align === "right") {
            if (this.openDrawer.type === "squash") {
                return 0;
            }

            return -this.openDrawer.width;
        }

        return this.openDrawer.width;
    }

    public get contentMarginRight(): number {
        if (!this.drawerVisible) {
            return 0;
        }
        if (this.openDrawer.type === "classic") {
            return 0;
        }
        if (this.openDrawer.type === "moving") {
            return 0;
        }
        if (this.openDrawer.align === "right") {
            return this.openDrawer.width;
        }
        if (this.openDrawer.align === "left") {
            return this.openDrawer.width;
        }

        return 0;
    }

    public get realFilter(): string {
        if (!this.drawerVisible || !this.filter || !this.backdrop) {

            return "none";
        }

        return this.filter;
    }

    private get drawerVisible(): boolean {
        return this.openDrawer && this.openDrawer.visible;
    }

    public ngOnInit(): void {
    }

    @HostListener("document:keydown.escape")
    public onBackdropClicked(): void {
        if (this.openDrawer) {
            this.openDrawer.close();
        }
    }

    public close(param: MenuDrawerComponent) {
        if (param === this.openDrawer) {
            this.openDrawer = null;
        }
    }

    public open(param: MenuDrawerComponent) {
        if (this.openDrawer && param !== this.openDrawer) {
            this.openDrawer.close();
        }
        this.openDrawer = param;
    }
}
