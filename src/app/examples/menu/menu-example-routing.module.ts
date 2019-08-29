import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MenuExampleComponent} from "./menu-example/menu-example.component";

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
            component: MenuExampleComponent,
        }
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuExampleRoutingModule {
}
