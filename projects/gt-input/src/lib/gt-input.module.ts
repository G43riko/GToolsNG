import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreInputComponent } from './components/core-input/core-input.component';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { GtInputComponent } from './gt-input.component';

@NgModule({
    declarations: [
        GtInputComponent,
        CoreInputComponent,
        NumberInputComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        GtInputComponent,
        NumberInputComponent,
        CoreInputComponent,
    ]
})
export class GtInputModule {
}
