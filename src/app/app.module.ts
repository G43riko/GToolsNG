import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeSk from '@angular/common/locales/sk';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GT_TRANSLATE_TOKEN } from '../../projects/gt-common/src/lib/services/gt-translate/gt-translation.interface';
import { MenuModule } from '../../projects/menu/src/lib/menu.module';
import { appRoutes } from './app-routing';

import { AppComponent } from './app.component';
import { fakeBackendProvider } from './mock/fake-backend-interceptor.service';
import { AboutComponent } from './pages/about/about.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

registerLocaleData(localeSk, 'en');

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        WelcomeComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient],
            },
        }),
        RouterModule.forRoot(appRoutes),
        MenuModule,
    ],
    providers: [
        fakeBackendProvider,
        {provide: GT_TRANSLATE_TOKEN, useClass: TranslateService}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
