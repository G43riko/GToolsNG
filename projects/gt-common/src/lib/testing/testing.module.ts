import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
    declarations: [],
    imports: [],
    exports: [
        RouterTestingModule,
        NoopAnimationsModule,
        HttpClientModule,
    ]
})
export class TestingModule {
}
