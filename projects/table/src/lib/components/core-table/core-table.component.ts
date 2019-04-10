import { Component, ElementRef, Inject, Input, OnInit, Optional, QueryList, ViewChildren } from '@angular/core';
import { GT_TRANSLATE_TOKEN, GTTranslation } from '@gt-common';
import { Observable, of } from 'rxjs';
import { TableColumnConfigInterface } from '../../interfaces/table-column-config.interface';
import { TableConfigInterface } from '../../interfaces/table-config.interface';

@Component({
    selector: 'gt-core-table',
    templateUrl: './core-table.component.html',
    styleUrls: ['./core-table.component.scss']
})
export class CoreTableComponent implements OnInit {
    @Input() public tableConfig: TableConfigInterface;
    @Input() public data: any[];
    @ViewChildren('selectionCheckbox') public checkboxes: QueryList<ElementRef<HTMLInputElement>>;

    public constructor(@Optional() @Inject(GT_TRANSLATE_TOKEN) private readonly translationService: GTTranslation) {
    }

    public get hasSelection(): boolean {
        if (!this.tableConfig) {
            return false;
        }

        return this.tableConfig.selectable === 'MULTI' || this.tableConfig.selectable === 'SINGLE';
    }

    public ngOnInit(): void {
    }

    public getLabel(columnConfig: TableColumnConfigInterface): Observable<string> {
        if (columnConfig.labelKey) {
            if (this.translationService) {
                return this.translationService.get(columnConfig.labelKey);
            }

            return of(columnConfig.labelKey);
        }

        return of(columnConfig.label);
    }

    public onRowClick(row: any, rowIndex: number) {
        if (typeof this.tableConfig.onRowClick !== 'function') {
            return;
        }

        this.tableConfig.onRowClick(row, rowIndex);
    }

    public getCellClass(row: any, rowIndex: number, columnIndex: number, config: TableColumnConfigInterface): string {
        if (typeof config.cellClass !== 'function') {
            return '';
        }

        return config.cellClass(row, rowIndex, columnIndex);
    }

    public onSelectAll(selectAll: boolean): void {
        this.checkboxes.forEach((e) => {
            e.nativeElement.checked = selectAll;
        });
    }

    public changeCheckbox(row: any, checkboxInput: HTMLInputElement): void {
        if (this.tableConfig.selectable === 'SINGLE') {
            const value = checkboxInput.checked;
            this.checkboxes.forEach((e) => {
                e.nativeElement.checked = false;
            });
            checkboxInput.checked = value;
        }
    }

    public getRowClass(row: any, rowIndex: number): string {
        switch (typeof this.tableConfig.rowClass) {
            case 'function':
                return this.tableConfig.rowClass(row, rowIndex);
            case 'string':
                return this.tableConfig.rowClass;
            default:
                return '';
        }
    }

}
