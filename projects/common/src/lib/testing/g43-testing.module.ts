import {CommonModule} from "@angular/common";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NgModule} from "@angular/core";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {RouterTestingModule} from "@angular/router/testing";
import {G43_NOTIFICATION_TOKEN} from "../services/g43-notification/g43-notification.interface";

@NgModule({
    declarations: [],
    imports: [],
    providers: [
        {
            provide: G43_NOTIFICATION_TOKEN,
            useValue: {
                openErrorNotification: (error: any) => {
                    // empty
                },
                openInfoNotification: (info: any) => {
                    // empty
                },
                openSuccessNotification: (success: any) => {
                    // empty
                },
            },
        },
    ],
    exports: [
        CommonModule,
        RouterTestingModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
    ],
})

export class G43TestingModule {
}
