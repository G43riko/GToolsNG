import { NgModule } from '@angular/core';
import { TestingModule } from '@gt/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FakeTranslationLoader } from './fake-translation-loader';

@NgModule({
    declarations: [],
    imports: [
        TranslateModule.forRoot({
            loader: {provide: TranslateLoader, useClass: FakeTranslationLoader},
        })
    ],
    exports: [
        TestingModule,
        TranslateModule,
    ]
})
export class AppTestingModule {
}
