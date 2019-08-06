import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {G43InputModule} from "@g43/input";
import {CoreInputComponent} from "./core-input/core-input.component";
import {InputExampleRoutingModule} from "./input-example-routing.module";
import {InputExampleComponent} from "./input-example.component";

@NgModule({
    declarations: [
        CoreInputComponent,
        InputExampleComponent,
    ],
    imports: [
        CommonModule,
        InputExampleRoutingModule,
        G43InputModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class InputExampleModule {
}
