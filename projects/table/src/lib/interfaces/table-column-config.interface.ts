import { TemplateRef } from "@angular/core";
import { TableFilterConfigInterface } from "./table-filter-config.interface";

export enum FooterType {
    SUM = 1 << 0,
    AVG = 1 << 1,
    MIN = 1 << 2,
    MAX = 1 << 3,
}

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
    type?: "number" | "string" | "date" | "boolean";
    sort?: boolean;
    width?: string;
    contentAlign?: "center" | "left" | "right";
    /**
     * Defines classes for td elements
     */
    cellClass?: (row: any, rowIndex: number, columnIndex: number) => string;

    /**
     * Column title printed into th element
     */
    label?: string;
    labelKey?: string;
    /**
     * Function for cell styling and mapping
     */
    customValue?: (row: any) => string;
    footer?: FooterType | FooterType[];
    customFooter?: (iterator: IterableIterator<any>) => string;

    selection?: "none" | "single" | "multi";
    /**
     * Align property for alignment usage
     */
    align?: "center" | "left" | "right";

    /**
     * Name of attribute whose value is displayed
     */
    columnDef: string;

    visible?: boolean;
    /**
     * Format for DatePipe
     */
    format?: string;

    /**
     */
    tableCellTemplate?: TemplateRef<any>;
    // sticky: "LEFT" | "RIGHT"
}
