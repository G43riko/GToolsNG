import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {G43InputModule} from "../../../../projects/input/src/lib/g43-input.module";
import {InputExampleRoutingModule} from "./input-example-routing.module";
import {InputExampleComponent} from "./input-example.component";
import {TestButtonComponent} from "./test-button/test-button.component";
import {TestCoreInputComponent} from "./test-core-input/test-core-input.component";

@NgModule({
    declarations: [
        TestCoreInputComponent,
        InputExampleComponent,
        TestButtonComponent,
    ],
    imports: [
        CommonModule,
        InputExampleRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        G43InputModule
    ]
})
export class InputExampleModule {
}
