import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FooterType } from '../../../../../projects/table/src/lib/interfaces/table-column-config.interface';
import { TableConfigInterface } from '../../../../../projects/table/src/lib/interfaces/table-config.interface';
import { Employee } from '../../../mock/data/employees.data';
import { EmployeeService } from '../../services/employee.service';

@Component({
    selector: 'basic-table',
    templateUrl: './basic-table.component.html',
    styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {
    @ViewChild('customColumn') public customColumn: TemplateRef<any>;
    public tableConfig: TableConfigInterface;
    public data: Employee[];
    public readonly title = 'TableMaker';

    public constructor(private readonly employeeService: EmployeeService) {
    }

    public ngOnInit(): void {
        this.employeeService.getList().subscribe((data) => {
            this.data = data;
        });

        this.tableConfig = {
            // onRowClick: (row: any) => alert("Age: " + row.age),
            // selectable: 'SINGLE',
            selectable: 'MULTI',
            rowClass: (row: any, rowIndex: number) => `table-row-${ rowIndex } hovered`,
            columns: [
                {
                    labelKey: 'employees.name',
                    columnDef: 'name',
                    sort: true,
                    customFooter: (iterator: IterableIterator<any>): string => {
                        const result = [];
                        for (let entry = iterator.next(); !entry.done; entry = iterator.next()) {
                            result.push(entry.value[1].surname);
                        }

                        return result.join(', ');
                    },
                },
                {
                    labelKey: 'employees.surName',
                    columnDef: 'surName',
                    filter: {
                        type: 'STRING',
                    }
                },
                {
                    labelKey: 'employees.age',
                    columnDef: 'age',
                    sort: true,
                    footer: FooterType.MAX,
                    width: '100px',
                    filter: {
                        type: 'NUMBER_RANGE',
                        min: '0',
                        max: '150',
                    }
                },
                {
                    labelKey: 'employees.summary',
                    customValue: (row: any) => `${ row.name } ${ row.surName }(${ row.age })`,
                    columnDef: 'summary',
                    filter: {
                        type: 'STRING',
                    }
                },
                {
                    labelKey: 'employees.birthday',
                    columnDef: 'date',
                    width: '330px',
                    filter: {
                        type: 'DATE_RANGE',
                    }
                },
                {
                    labelKey: 'employees.level',
                    columnDef: 'level',
                    filter: {
                        type: 'SELECT',
                        selectValues: [
                            {
                                key: '',
                                value: '',
                            },
                            {
                                key: 'Junior',
                                value: 'JUNIOR'
                            },
                            {
                                key: 'Senior',
                                value: 'SENIOR'
                            },
                            {
                                key: 'Študent',
                                value: 'STUDENT'
                            }
                        ]
                    }
                },
                {
                    columnDef: 'something',
                    tableCellTemplate: this.customColumn,
                }
            ]
        };
    }
}
