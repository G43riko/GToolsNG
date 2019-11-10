import {Component, ElementRef, forwardRef, HostListener, Input, OnInit} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: "g43-core-select",
    templateUrl: "./core-select.component.html",
    styleUrls: ["./core-select.component.scss"],
    host: {
        "class": "select-wrapper",
        "[class.disabled]": "disabled",
    },
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CoreSelectComponent),
            multi: true
        }
    ]
})
export class CoreSelectComponent<T = any> implements OnInit, ControlValueAccessor {
    @Input() public values: T[] = [];
    @Input() public placeholder: string;
    @Input() public label: string;

    @Input() public disabled = !!this.elementRef.nativeElement.getAttribute("disabled");
    public selectedValue: T;
    public focusIndex = 0;
    public opened = false;

    public constructor(private readonly elementRef: ElementRef) {
    }

    @HostListener("keydown", ["$event"])
    // tslint:disable-next-line:no-invariant-return
    public onKeyDown(event: KeyboardEvent): boolean {
        if (this.disabled) {
            return true;
        }
        if (!this.opened) {
            if (event.code === "Enter") {
                this.open();

                return false;
            }

            return true;
        }
        console.log(event.code, this.focusIndex, this.opened);
        if (event.code === "ArrowDown") {
            this.focusIndex++;
        } else if (event.code === "ArrowUp") {
            this.focusIndex--;
        } else if (event.code === "Enter") {
            this.setValue(this.values[this.focusIndex]);
            this.close();

            return false;
        }
        this.focusIndex = Math.min(Math.max(0, this.focusIndex), this.values.length - 1);

        return false;
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

    public selectHovered(): void {
        this.selectedValue = this.values[this.focusIndex];
        this.onChange(this.selectedValue);
        this.close();
    }

    public setValue(newValue: T): void {
        this.selectedValue = newValue;
        this.focusIndex = this.values.indexOf(newValue);
        this.onChange(newValue);
    }

    @HostListener("document:click", ["$event"])
    public onclick(event: MouseEvent): void {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.close();
        }
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
        this.onChange(this.selectedValue || (Array.isArray(this.values) && this.values[0]) || null);
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
    }

    public writeValue(obj: T): void {
        this.selectedValue = obj;
    }


    public ngOnInit(): void {
    }

}
