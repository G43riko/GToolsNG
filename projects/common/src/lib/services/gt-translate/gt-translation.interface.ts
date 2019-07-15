import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface GTTranslation {
    get(key: string): Observable<string>;

    /**
     * get translate instantly
     *
     */
    instant(key: string): string;

    currentLang?: string;

    use?(lang: string): void;

    exists?(key: string): boolean;
}

export const GT_TRANSLATE_TOKEN = new InjectionToken<GTTranslation>('GTTranslation');
