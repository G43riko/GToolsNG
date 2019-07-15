import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GtInputModule } from '@gt/input/src/lib/gt-input.module';
import { CoreInputComponent } from './core-input/core-input.component';
import { InputExampleRoutingModule } from './input-example-routing.module';
import { InputExampleComponent } from './input-example.component';

@NgModule({
    declarations: [
        CoreInputComponent,
        InputExampleComponent,
    ],
    imports: [
        CommonModule,
        InputExampleRoutingModule,
        GtInputModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class InputExampleModule {
}
