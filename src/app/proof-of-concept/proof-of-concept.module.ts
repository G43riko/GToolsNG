import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {LazyLoadingComponent} from "./lazy-loading/lazy-loading.component";
import {LazyLoadingDirective} from "./lazy-loading/lazy-loading.directive";
import {ProofOfConceptRoutingModule} from "./proof-of-concept-routing.module";

@NgModule({
    declarations: [LazyLoadingComponent, LazyLoadingDirective],
    imports: [
        ProofOfConceptRoutingModule,
        CommonModule
    ]
})
export class ProofOfConceptModule {
}
