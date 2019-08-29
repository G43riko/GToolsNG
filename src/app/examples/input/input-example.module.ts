import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {G43InputModule} from "@g43/input";
import {TestCoreInputComponent} from "./core-input/test-core-input.component";
import {InputExampleRoutingModule} from "./input-example-routing.module";
import {InputExampleComponent} from "./input-example.component";

@NgModule({
    declarations: [
        TestCoreInputComponent,
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
