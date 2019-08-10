import { NgModule } from "@angular/core";
import { G43TestingModule } from "@g43/common";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { FakeTranslationLoader } from "./fake-translation-loader";

@NgModule({
    declarations: [],
    imports: [
        TranslateModule.forRoot({
            loader: {provide: TranslateLoader, useClass: FakeTranslationLoader},
        })
    ],
    exports: [
        G43TestingModule,
        TranslateModule,
    ]
})
export class AppTestingModule {
}
