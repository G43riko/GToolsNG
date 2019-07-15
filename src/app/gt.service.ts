import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractService } from '@gt/common';


export abstract class GtService<T = any> extends AbstractService<T> {
    public constructor(http: HttpClient) {
        super(http, null);
    }

    protected getHeader(): HttpHeaders {
        const result = new HttpHeaders();

        return result;
    }
}
