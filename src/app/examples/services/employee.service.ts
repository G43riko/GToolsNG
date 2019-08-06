import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {G43Service} from "@g43/common";
import { Observable } from 'rxjs';
import { Employee } from '../../mock/data/employees.data';
import {NotificationService} from "../../tests/notification.service";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService extends G43Service<Employee> {

    public constructor(httpClient: HttpClient, notificationService: NotificationService) {
        super(httpClient, notificationService);
    }

    public getList(): Observable<Employee[]> {
        return this.get({
            url: '/employees',
        });
    }
}
