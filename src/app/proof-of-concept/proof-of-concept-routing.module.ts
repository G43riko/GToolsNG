import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LazyLoadingComponent} from "./lazy-loading/lazy-loading.component";

const routes: Routes = [{
    path: "",
    children: [
        {
            path: "",
            pathMatch: "full",
            redirectTo: "overview",
        },
        {
            path: "lazyLoading",
            component: LazyLoadingComponent,
        }
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProofOfConceptRoutingModule {
}
