import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'g43-number-input',
    templateUrl: './number-input.component.html',
    styleUrls: ['./number-input.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NumberInputComponent),
            multi: true
        }
    ]
})
export class NumberInputComponent implements OnInit, ControlValueAccessor {
    public inputFormControl = new FormControl('');
    @Input() public label?: string;
    @Input() public placeholder?: string;
    private lastValue: string;


    public ngOnInit() {
        this.inputFormControl.valueChanges.subscribe((value) => {
            this.onChange(this.processValue(value));
        });
    }

    public onChange(value: string): void {
    }

    public onTouched(value: string): void {
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

    public writeValue(value: string): void {
        if (!this.lastValue) {
            this.lastValue = value;
        }
        this.inputFormControl.setValue(value || '', {emitEvent: false});
    }

    protected processValue(value: string): string {
        if (this.isValidNumber(value)) {
            this.lastValue = value;
        }
        this.writeValue(this.lastValue);

        return this.lastValue;
    }

    private isValidNumber(value: string): boolean {
        return /^[0-9,.]*$/.test(value);
    }
}
