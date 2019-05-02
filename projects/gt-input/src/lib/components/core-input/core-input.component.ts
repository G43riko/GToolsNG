import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'gt-core-input',
    templateUrl: './core-input.component.html',
    styleUrls: ['./core-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CoreInputComponent),
            multi: true
        }
    ]
})
export class CoreInputComponent<T = string> implements OnInit, ControlValueAccessor {
    @Input() public label?: string;
    @Input() public placeholder?: string;
    public inputFormControl = new FormControl('');

    @Input('disabled')
    public set disable(value: boolean) {
        this.setDisabledState(value);
    }

    public ngOnInit() {
        this.inputFormControl.valueChanges.subscribe((value) => {
            this.onChange(this.processValue(value));
        });
    }

    public onChange(value: T): void {
    }

    public onTouched(value: T): void {
    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    public setDisabledState?(isDisabled: boolean): void {
        if (isDisabled) {
            this.inputFormControl.disable();
        } else {
            this.inputFormControl.enable();
        }
    }

    public writeValue(value: T): void {
        this.inputFormControl.setValue(value || '', {emitEvent: false});
    }

    protected processValue(value: T): T {
        return value;
    }

}
