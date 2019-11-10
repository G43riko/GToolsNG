import {Component, Input} from "@angular/core";

@Component({
    selector: "button[g43-button], a[g43-button]",
    templateUrl: "./button.component.html",
    styleUrls: ["./button.component.scss"],
    inputs: ["disabled"],
    host: {
        "[class.loading]": "loading",
        "[class.inline]": "inline",
        "[tabindex]": "disabled ? -1 : 0",
        // "[attr.disabled]": "disabled || loading || null",
        "[class.disabled]": "disabled || loading || null",
        "(click)": "checkClick($event)"
    }
})
export class ButtonComponent {
    @Input() public value: string;
    @Input() public icon: string;
    @Input() public inline: boolean;
    @Input() public loading: boolean;
    @Input() public disabled: boolean;


    public checkClick($event: Event): void {
        if (this.disabled || this.loading) {
            $event.preventDefault();
            $event.stopImmediatePropagation();
        }
    }
}
