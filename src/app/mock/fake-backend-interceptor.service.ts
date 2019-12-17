import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AbstractRestApiHandler, SimpleMemoryDatabaseService} from "@common";
import {Observable, of} from "rxjs";
import {delay, dematerialize, materialize, mergeMap} from "rxjs/operators";
import {Employee, employees} from "./data/employees.data";
import {Movie, movies} from "./data/movies.data";
import {MovieFixture} from "./data/movie.fixture";
import {EmployeeFixture} from "./data/employee.fixture";

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    private static readonly REQUEST_DELAY = 500;
    private readonly moviesRestHandler = new AbstractRestApiHandler<Movie>(new SimpleMemoryDatabaseService(new MovieFixture()), "movies");
    private readonly employeesRestHandler = new AbstractRestApiHandler<Employee>(new SimpleMemoryDatabaseService(new EmployeeFixture()), "employees");

    public constructor() {
        // empty
    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return of(null).pipe(mergeMap(() => {
            console.log("request: ", request);

            const moviesRestHandlerResult = this.moviesRestHandler.use(request);
            if (moviesRestHandlerResult) {
                return moviesRestHandlerResult;
            }

            const employeesRestHandlerResult = this.employeesRestHandler.use(request);
            if (employeesRestHandlerResult) {
                return employeesRestHandlerResult;
            }

            // pass through any requests not handled above
            return next.handle(request);

        })).pipe(materialize()).pipe(delay(FakeBackendInterceptor.REQUEST_DELAY)).pipe(dematerialize()) as any;
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true,
};
