import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "button[g43-button], a[g43-button]",
    templateUrl: "./button.component.html",
    styleUrls: ["./button.component.scss"],
    inputs: ["disabled"],
    host: {
        "[class.loading]": "loading",
        "[class.inline]": "inline",
        // "[attr.disabled]": "disabled || loading || null",
        "[class.disabled]": "disabled || loading || null",
        "(click)": "checkClick($event)"
    }
})
export class ButtonComponent implements OnInit {
    @Input() public value: string;
    @Input() public icon: string;
    @Input() public inline: boolean;
    @Input() public loading: boolean;
    @Input() public disabled: boolean;

    public ngOnInit() {
    }

    public checkClick($event: Event): void {
        if (this.disabled || this.loading) {
            $event.preventDefault();
            $event.stopImmediatePropagation();
        }
    }
}
