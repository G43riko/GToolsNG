import {Directive, ElementRef, HostBinding, HostListener, Input} from "@angular/core";
import {CoreSelectComponent} from "./core-select.component";

@Directive({
    selector: "[g43CoreSelectOption]",
    host: {
        class: "select-option"
    },
})
export class CoreSelectOptionDirective {
    @Input("index") public index: number;
    @Input("parent") private select: CoreSelectComponent;

    public constructor(private readonly elementRef: ElementRef) {
    }

    @Input("value")
    public set value(value: any) {
        this.elementRef.nativeElement.innerHTML = value;
    }

    @HostBinding("class.focused")
    private get focues(): boolean {
        return this.index === this.select.focusIndex;
    }

    @HostListener("click")
    private onClick(): void {
        this.select.selectHovered();
    }

    @HostListener("mouseenter")
    private onMouseEnter(): void {
        this.select.focusIndex = this.index;
    }

}
