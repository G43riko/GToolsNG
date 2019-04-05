import { Component, Input, OnInit } from '@angular/core';
import { TableColumnConfigInterface } from '../../interfaces/table-column-config.interface';

@Component({
    selector: 'gt-core-table-column',
    templateUrl: './core-table-column.component.html',
    styleUrls: ['./core-table-column.component.scss']
})
export class CoreTableColumnComponent implements OnInit {
    @Input() public columnConfig: TableColumnConfigInterface;
    @Input() public rowIndex: number;
    @Input() public columnIndex: number;
    @Input() public edited: false;
    @Input() public row: any;

    public constructor() {
    }

    public get editable() {
        if (this.columnConfig.customValue) {
            return false;
        }
        if (this.columnConfig.tableCellTemplate) {
            return false;
        }

        return !this.columnConfig.tableCellTemplate;

    }

    public get value() {
        if (typeof this.columnConfig.customValue === 'function') {
            return this.columnConfig.customValue(this.row);
        }

        return this.row[this.columnConfig.columnDef];
    }

    public ngOnInit(): void {
    }
}
