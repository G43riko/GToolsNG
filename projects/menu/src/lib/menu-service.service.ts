import {Injectable} from '@angular/core';
import {MenuContainerComponent} from "./menu-containter/menu-container.component";
import {MenuDrawerComponent} from "@menu/lib/menu-drawer/menu-drawer.component";

let counter = 1;

@Injectable()
export class MenuServiceService {
    private parent: MenuContainerComponent;
    private readonly id = counter++;

    public get topOffset(): number {
        return this.parent ? this.parent.topOffset : 0;
    }

    public setParent(parent: MenuContainerComponent): void {
        if (this.parent) {
            throw new Error("Parent is already set");
        }
        this.parent = parent;
    }

    public close(param: MenuDrawerComponent) {
        this.parent.close(param);
    }

    public open(param: MenuDrawerComponent) {
        this.parent.open(param);
    }
}
