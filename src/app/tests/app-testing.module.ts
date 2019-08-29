import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {G43TestingModule} from "@g43/common";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {FakeTranslationLoader} from "./fake-translation-loader";

@NgModule({
    declarations: [],
    imports: [
        TranslateModule.forRoot({
            loader: {provide: TranslateLoader, useClass: FakeTranslationLoader},
        })
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        G43TestingModule,
        TranslateModule,
    ]
})
export class AppTestingModule {
}
