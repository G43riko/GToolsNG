import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GtService } from '../../gt.service';
import { Employee } from '../../mock/data/employees.data';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService extends GtService<Employee> {

    public constructor(httpClient: HttpClient) {
        super(httpClient);
    }

    public getList(): Observable<Employee[]> {
        return this.get({
            url: '/employees',
        });
    }
}
