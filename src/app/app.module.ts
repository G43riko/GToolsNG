import {registerLocaleData} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import localeSk from "@angular/common/locales/sk";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {G43_NOTIFICATION_TOKEN, G43_TRANSLATE_TOKEN} from "@common";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MenuModule} from "@menu";
import {appRoutes} from "./app-routing";

import {AppComponent} from "./app.component";
import {fakeBackendProvider} from "./mock/fake-backend-interceptor.service";
import {AboutComponent} from "./pages/about/about.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {NotificationService} from "./tests/notification.service";

registerLocaleData(localeSk, "en");

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
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
        RouterModule.forRoot(appRoutes, {useHash: true}),
        MenuModule,
    ],
    providers: [
        fakeBackendProvider,
        {provide: G43_NOTIFICATION_TOKEN, useClass: NotificationService},
        {provide: G43_TRANSLATE_TOKEN, useClass: TranslateService},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
