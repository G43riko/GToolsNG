import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

/**
 * TODO: allow process parameters like
 *  offset
 *  limit
 *  formatter
 */
export class RestApiHandler<T extends { id: number }> {
    private readonly realData: T[];

    public constructor(data: T[], private readonly path: string) {
        this.realData = [...data];
    }

    public use(request: HttpRequest<T>): Observable<HttpResponse<T | T[]>> | null {
        // get all data
        if (request.url.endsWith(`/${ this.path }`) && request.method === 'GET') {
            return of(new HttpResponse({
                status: 200, body: this.realData,
            }));
        }

        // add new item
        if (request.url.endsWith(`/${ this.path }`) && request.method === 'POST') {
            this.realData.push(request.body);

            return of(new HttpResponse({
                status: 200, body: request.body,
            }));
        }

        // get data by id
        if (request.url.match(new RegExp(`/${ this.path }/[1-9][0-9]?`)) && request.method === 'GET') {
            const splitUrl = request.url.split('/');
            const id = parseInt(splitUrl[splitUrl.length - 1], 10);

            return of(new HttpResponse({
                status: 200, body: this.realData.find((employee) => employee.id === id),
            }));
        }

        // delete data by id
        if (request.url.match(new RegExp(`/${ this.path }/[1-9][0-9]?`)) && request.method === 'DELETE') {
            const splitUrl = request.url.split('/');
            const id = parseInt(splitUrl[splitUrl.length - 1], 10);
            const indexOfElementForDelete = this.realData.findIndex((employee) => employee.id === id);
            const removedElement = this.realData.splice(indexOfElementForDelete, 1)[0];

            return of(new HttpResponse({status: 200, body: removedElement}));
        }

        // update data by id
        if (request.url.match(new RegExp(`/${ this.path }/[1-9][0-9]?`)) && request.method === 'PUT') {
            const splitUrl = request.url.split('/');
            const id = parseInt(splitUrl[splitUrl.length - 1], 10);
            const indexOfUpdating = this.realData.findIndex((employee) => employee.id === id);
            this.realData[indexOfUpdating] = request.body;

            return of(new HttpResponse({status: 200, body: this.realData[indexOfUpdating]}));
        }

        return null;
    }
}
