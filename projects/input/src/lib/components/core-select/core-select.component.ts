import {Component, HostListener, Input, OnInit} from "@angular/core";
import {ControlValueAccessor} from "@angular/forms";

@Component({
    selector: "g43-core-select",
    templateUrl: "./core-select.component.html",
    styleUrls: ["./core-select.component.scss"]
})
export class CoreSelectComponent<T = any> implements OnInit, ControlValueAccessor {
    @Input() public values: T[] = [];
    @Input() public placeholder: string;
    @Input() public label: string;
    public selectedValue: T;
    public focusIndex = 0;
    public opened = false;

    public constructor() {
    }

    public get visibleValue(): string {
        if (this.selectedValue) {
            return String(this.selectedValue);
        }
        if (this.placeholder) {
            return this.placeholder;
        }
        if (Array.isArray(this.values) && this.values.length) {
            return String(this.values[0]);
        }

        return "";
    }

    public setValue(newValue: T): void {
        this.selectedValue = newValue;
        this.focusIndex = this.values.indexOf(newValue);
        this.onChange(newValue);
    }

    @HostListener("document:keydown.escape")
    public close(): void {
        this.opened = false;
    }

    public open(): void {
        this.opened = true;
    }

    public toggle(): void {
        this.opened ? this.close() : this.open();
    }

    public onChange(value: T): void {
        // empty
    }

    public onTouched(value: T): void {
        // empty
    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    public writeValue(obj: T): void {
        this.selectedValue = obj;
    }


    public ngOnInit(): void {
    }

}
