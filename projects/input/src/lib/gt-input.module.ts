import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GtInputComponent } from '@g43/input/src/lib/gt-input.component';
import { CoreInputComponent } from './components/core-input/core-input.component';
import { NumberInputComponent } from './components/number-input/number-input.component';

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
