import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

const translations: any = {
    CARDS_TITLE: 'This is a test'
};

export class FakeTranslationLoader implements TranslateLoader {
    public getTranslation(lang: string): Observable<any> {
        return of(translations);
    }
}
