import { TemplateRef } from '@angular/core';
import { TableFilterConfigInterface } from './table-filter-config.interface';

export interface TableColumnConfigInterface {
    /**
     * Enable / Disable filtering
     *
     */
    filter?: TableFilterConfigInterface;
    /**
     * Enable / Disable sorting
     *
     */
    type?: 'number' | 'string' | 'date';
    sort?: boolean;
    width?: string;
    /**
     * Defines classes for td elements
     */
    cellClass?: (row: any, rowIndex: number, columnIndex: number) => string;

    /**
     * Column title printed into th element
     */
    label?: string;
    /**
     * Function for cell styling and mapping
     */
    customValue?: (row: any) => string;
    footer?: 'SUM' | 'AVG' | 'MIN' | 'MAX';
    customFooter?: (iterator: IterableIterator<any>) => string;

    selection?: 'none' | 'single' | 'multi';
    /**
     * Align property for alignment usage
     */
    align?: 'center' | 'left' | 'right';

    /**
     * Name of attribute whose value is displayed
     */
    columnDef: string;

    /**
     */
    tableCellTemplate?: TemplateRef<any>;
    // sticky: "LEFT" | "RIGHT"
}
