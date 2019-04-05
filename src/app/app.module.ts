import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../../projects/menu/src/lib/menu.module';
import { appRoutes } from './app-routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        WelcomeComponent
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
