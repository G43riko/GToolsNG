import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InputExampleComponent } from "./input-example.component";

const routes: Routes = [{
    path: "",
    children: [
        {
            path: "",
            pathMatch: "full",
            redirectTo: "overview",
        },
        {
            path: "overview",
            component: InputExampleComponent,
        }
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InputExampleRoutingModule {
}
