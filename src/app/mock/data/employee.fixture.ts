import {AbstractFixture} from "gtools";
import {Employee, employees} from "./employees.data";

export class EmployeeFixture extends AbstractFixture<Employee> {
    public constructor() {
        super(employees);

    }

}
