import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonComponent} from "./components/button/button.component";
import {CoreInputComponent} from "./components/core-input/core-input.component";
import {CoreSelectOptionDirective} from "./components/core-select/core-select-option.directive";
import {CoreSelectComponent} from "./components/core-select/core-select.component";
import {NumberInputComponent} from "./components/number-input/number-input.component";
import {G43InputComponent} from "./g43-input.component";

@NgModule({
    declarations: [
        G43InputComponent,
        CoreInputComponent,
        NumberInputComponent,
        ButtonComponent,
        CoreSelectComponent,
        CoreSelectOptionDirective,
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
        CoreSelectComponent,
    ]
})
export class G43InputModule {
}
