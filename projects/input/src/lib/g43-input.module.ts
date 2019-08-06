import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreInputComponent } from './components/core-input/core-input.component';
import { NumberInputComponent } from './components/number-input/number-input.component';
import {G43InputComponent} from "./g43-input.component";

@NgModule({
    declarations: [
        G43InputComponent,
        CoreInputComponent,
        NumberInputComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        G43InputComponent,
        NumberInputComponent,
        CoreInputComponent,
    ]
})
export class G43InputModule {
}
