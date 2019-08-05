import { async, TestBed } from '@angular/core/testing';
import { MenuModule } from '@g43/menu/lib/menu.module';
import { AppComponent } from './app.component';
import { AppTestingModule } from './tests/app-testing.module';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule,
                MenuModule,
            ],
            declarations: [
                AppComponent,
            ],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'GToolsNG'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('GToolsNG');
    });

    it('should render title in a h1 tag', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        const title = compiled.querySelector('h1');
        // expect(title).toBeTruthy();
        // expect(title.textContent).toContain('Welcome to GToolsNG!');
    });
});
