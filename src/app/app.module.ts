import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../../projects/menu/src/lib/menu.module';
import { appRoutes } from './app-routing';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        MenuModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
