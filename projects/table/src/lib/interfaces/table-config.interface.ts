import {TableColumnConfigInterface} from "./table-column-config.interface";

export interface TableConfigInterface {
    // sticky footer
    // sticky header
    paging?: boolean;
    pageSize?: number;
    debounceTime?: number;
    pageSizeOptions?: number[];
    uppercaseHeader?: boolean;
    noDataText?: string;
    sticky?: boolean;
    selectable?: "NONE" | "SINGLE" | "MULTI";
    onSelectionChange?: (selectedRows: any[]) => void;
    columns: TableColumnConfigInterface[];
    rowClass?: (row: any, rowIndex: number) => string;
    onRowClick?: (row: any, rowIndex: number) => void;
}
