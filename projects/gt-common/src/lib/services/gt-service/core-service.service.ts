import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { GTNotification } from '@gt-common';
import { StringMap } from 'gtools';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface AbstractServiceParams<T> {
    url: string;
    body?: any;
    mapFunction?: (response: any) => T;
    headers?: HttpHeaders;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    params?: HttpParams | { [param: string]: string | string[]; };
}

export abstract class CoreService<T> {
    protected constructor(protected readonly http: HttpClient,
                          protected readonly notificationService: GTNotification) {
    }

    /**
     */
    protected delete<S = T>({url, body, mapFunction = (e) => e, params = {}, headers = this.getHeader()}: AbstractServiceParams<S>): Observable<any> {
        return this.http.delete(url, {
            headers,
            params: this.getParameters(params as StringMap),
        }).pipe(
            map(mapFunction),
            catchError((error) => this.handleError(error)),
        );
    }

    /**
     * Function returns object Header, which contains all required headers for successfully request
     *
     */
    protected getHeader(): HttpHeaders {
        throw new Error('CoreService.getHeader method must by implemented');
    }

    /**
     * Function return object HttpParams, which contains URL search parameters
     *
     */
    protected getParameters(parameters?: StringMap): HttpParams {
        let httpParams = new HttpParams();
        if (parameters) {
            for (const key in parameters) {
                if (parameters.hasOwnProperty(key)) {
                    httpParams = httpParams.append(key, parameters[key]);
                }
            }
        }

        return httpParams;
    }

    /**
     */
    protected post<S = T[]>({url, body, mapFunction = (e) => e, params = {}, headers = this.getHeader()}: AbstractServiceParams<S>): Observable<S> {
        return this.http.post(url, body, {
            params, headers,
        }).pipe(
            map(mapFunction),
            catchError((error) => this.handleError(error)),
        );
    }

    /**
     */
    protected put<S = T[]>({url, body, mapFunction = (e) => e, params = {}, headers = this.getHeader()}: AbstractServiceParams<S>): Observable<{} | S> {
        return this.http.put(url, JSON.stringify(body), {headers}).pipe(
            map(mapFunction),
            catchError((error) => this.handleError(error)),
        );
    }

    /**
     */
    protected get<S = T>({url, body, mapFunction = (e) => e, params = {}, responseType = 'json', headers = this.getHeader()}: AbstractServiceParams<S>): Observable<S> {
        return this.http.get<S>(url, {
            headers,
            responseType: responseType as any, // Hack because overloading
            params: this.getParameters(params as StringMap),
        }).pipe(
            map(mapFunction),
            catchError((error) => this.handleError(error)),
        );
    }

    /**
     * Function handle error from HTTP request or from server
     *
     */
    protected handleError(error: HttpResponse<any>): Observable<never> {
        if (error.status === 401) {
            window.location.hash = '/login';

            return throwError('error.unauthorized');
        }
        if (error.status === 504) {
            return throwError('error.gatewayTimeout');
        }

        return throwError(error);
    }

}
