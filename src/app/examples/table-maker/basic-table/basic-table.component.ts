import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableConfigInterface } from '../../../../../projects/table/src/lib/interfaces/table-config.interface';
import { Employee, employees } from '../../../mock/employees.data';

@Component({
    selector: 'basic-table',
    templateUrl: './basic-table.component.html',
    styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {
    @ViewChild('customColumn') public customColumn: TemplateRef<any>;
    public tableConfig: TableConfigInterface;
    public readonly data: Employee[] = employees;
    public readonly title = 'TableMaker';

    public ngOnInit(): void {
        this.tableConfig = {
            // onRowClick: (row: any) => alert("Age: " + row.age),
            // selectable: 'SINGLE',
            selectable: 'MULTI',
            rowClass: (row: any, rowIndex: number) => `table-row-${ rowIndex } hovered`,
            columns: [
                {
                    label: 'Meno',
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
                    label: 'Priezvisko',
                    columnDef: 'surName',
                    filter: {
                        type: 'STRING',
                    }
                },
                {
                    label: 'Vek',
                    columnDef: 'age',
                    sort: true,
                    footer: 'MAX',
                    width: '100px',
                    filter: {
                        type: 'NUMBER_RANGE',
                        min: '0',
                        max: '150',
                    }
                },
                {
                    label: 'Súhrn',
                    customValue: (row: any) => `${ row.name } ${ row.surName }(${ row.age })`,
                    columnDef: 'summary',
                    filter: {
                        type: 'STRING',
                    }
                },
                {
                    label: 'Dátum narodenia',
                    columnDef: 'date',
                    width: '330px',
                    filter: {
                        type: 'DATE_RANGE',
                    }
                },
                {
                    label: 'Úroveň',
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
                    columnDef: 'nieco',
                    tableCellTemplate: this.customColumn,
                }
            ]
        };
    }
}
