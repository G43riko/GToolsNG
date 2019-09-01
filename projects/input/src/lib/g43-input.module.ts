import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonComponent} from "./components/button/button.component";
import {CoreInputComponent} from "./components/core-input/core-input.component";
import {NumberInputComponent} from "./components/number-input/number-input.component";
import {G43InputComponent} from "./g43-input.component";

@NgModule({
    declarations: [
        G43InputComponent,
        CoreInputComponent,
        NumberInputComponent,
        ButtonComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
    ],
    exports: [
        G43InputComponent,
        NumberInputComponent,
        CoreInputComponent,
        ButtonComponent,
    ]
})
export class G43InputModule {
}
