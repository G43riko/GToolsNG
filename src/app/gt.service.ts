import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractService } from '@g43/common';


export abstract class GtService<T = any> extends AbstractService<T> {
    protected constructor(http: HttpClient) {
        super(http, null);
    }

    protected getHeader(): HttpHeaders {
        const result = new HttpHeaders();

        return result;
    }
}
