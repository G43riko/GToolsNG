import {Injectable} from "@angular/core";

interface State {
    menuType: "classic" | "moving" | "squash";
    backdrop: boolean;
    topMenuHeight: number;
}


@Injectable({
    providedIn: "root"
})
export class StateService {
    private readonly data: State = {
        menuType: "squash",
        backdrop: true,
        topMenuHeight: 50
    };

    public get menuType(): State["menuType"] {
        return this.data.menuType;
    }

    public set menuType(value: State["menuType"]) {
        this.data.menuType = value;
    }

    public get backdrop(): State["backdrop"] {
        return this.data.backdrop;
    }

    public set backdrop(value: State["backdrop"]) {
        this.data.backdrop = value;
    }

    public get topMenuHeight(): State["topMenuHeight"] {
        return this.data.topMenuHeight;
    }

    public set topMenuHeight(value: State["topMenuHeight"]) {
        this.data.topMenuHeight = value;
    }
}
