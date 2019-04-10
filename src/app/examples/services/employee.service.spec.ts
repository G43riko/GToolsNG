import { TestBed } from '@angular/core/testing';
import { AppTestingModule } from '../../tests/app-testing.module';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            AppTestingModule,
        ]
    }));

    it('should be created', () => {
        const service: EmployeeService = TestBed.get(EmployeeService);
        expect(service).toBeTruthy();
    });
});
