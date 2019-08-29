import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {MenuExampleRoutingModule} from "./menu-example-routing.module";
import {MenuExampleComponent} from "./menu-example/menu-example.component";


@NgModule({
    declarations: [MenuExampleComponent],
    imports: [
        CommonModule,
        MenuExampleRoutingModule,
        ReactiveFormsModule,
    ],
    exports: [
        MenuExampleComponent,
    ]
})
export class MenuExampleModule {
}
