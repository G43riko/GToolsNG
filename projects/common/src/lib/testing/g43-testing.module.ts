import {CommonModule} from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { NgModule } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";

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
