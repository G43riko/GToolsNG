import {CommonModule} from "@angular/common";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NgModule} from "@angular/core";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {RouterTestingModule} from "@angular/router/testing";

@NgModule({
    declarations: [],
    imports: [],
    exports: [
        CommonModule,
        RouterTestingModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
    ]
})
export class G43TestingModule {
}
