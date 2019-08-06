import { HttpClient, HttpHeaders } from '@angular/common/http';
import { G43Service } from '@g43/common';


export abstract class GtService<T = any> extends G43Service<T> {
    protected constructor(http: HttpClient) {
        super(http, null);
    }

    protected getHeader(): HttpHeaders {
        const result = new HttpHeaders();

        return result;
    }
}
