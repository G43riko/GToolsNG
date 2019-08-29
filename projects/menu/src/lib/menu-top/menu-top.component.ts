import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "g43-menu-top",
    templateUrl: "./menu-top.component.html",
    styleUrls: ["./menu-top.component.scss"],
    host: {
        "[style.height.px]": "height"
    }
})
export class MenuTopComponent implements OnInit {
    @Input() public visible = false;
    private realHeight = 50;

    public get height(): number {
        return this.realHeight;
    }

    @Input()
    public set height(value: number) {
        this.realHeight = value;
    }

    public ngOnInit(): void {
    }

    public close(): void {
        this.visible = false;
    }


}
