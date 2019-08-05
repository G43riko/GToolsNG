import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface G43Translation {
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

export const G43_TRANSLATE_TOKEN = new InjectionToken<G43Translation>('GTTranslation');
