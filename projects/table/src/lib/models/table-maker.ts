import { FooterType, TableColumnConfigInterface } from "../interfaces/table-column-config.interface";
import { TableConfigInterface } from "../interfaces/table-config.interface";

export class TableMaker<T> {
    private readonly wrapper: HTMLElement;
    private readonly tableHeader: HTMLTableSectionElement;
    private readonly tableBody: HTMLTableSectionElement;
    private readonly tableFooter: HTMLTableSectionElement;
    private sort: "" | "DESC" | "ASC";
    private sortColumn: string;
    private realData: T[] = [];
    private readonly filters: { [key: string]: string | number } = {};
    private readonly utils = {
        getRowName(config: TableColumnConfigInterface): string {
            return config.columnDef;
        },
        createElement<S extends HTMLElement>(elementName: string): S {
            return document.createElement(elementName) as S;
        }
    };

    public constructor(selector: string, private readonly config: TableConfigInterface, private readonly defaultData: T[]) {
        this.wrapper = document.querySelector(selector);
        if (!this.wrapper) {
            throw new Error(`Cannot find element "${ selector }"`);
        }

        const table = this.utils.createElement<HTMLTableElement>("table");

        this.tableHeader = this.utils.createElement<HTMLTableSectionElement>("thead");
        this.createHeader();
        table.appendChild(this.tableHeader);


        const hasAnyData = defaultData.some((row) => !!row);
        if (hasAnyData) {
            this.tableBody = this.utils.createElement<HTMLTableSectionElement>("tbody");
            this.createBody();
            table.appendChild(this.tableBody);
        }

        const hasAnyFooter = this.config.columns.some((actConfig) => !!actConfig.footer || !actConfig.customFooter);
        if (hasAnyFooter) {
            this.tableFooter = this.utils.createElement<HTMLTableSectionElement>("tfoot");
            this.createFooter();
            table.appendChild(this.tableFooter);

        }

        this.wrapper.appendChild(table);
    }

    private getText(config: TableColumnConfigInterface, rowData: T): string | number {
        if (typeof config.customValue === "function") {
            return config.customValue(rowData);
        }

        return rowData[this.utils.getRowName(config)];
    }

    private setFilter(key: string, value: string): void {
        this.filters[key] = value;
        this.createBody();
    }

    private createHeader(): void {
        const hasAnyFilter = this.config.columns.some((config) => !!config.filter);
        const createFirstRow = (): HTMLTableRowElement => {
            const tableRow = this.utils.createElement<HTMLTableRowElement>("tr");

            this.config.columns.forEach((column) => {
                const tableHeader = this.utils.createElement<HTMLTableHeaderCellElement>("th");

                if (typeof column.label === "string") {
                    tableHeader.innerText = column.label;
                }
                if (column.sort === true) {
                    tableHeader.style.cursor = "pointer";
                    tableHeader.addEventListener("click", () => {
                        if (this.sortColumn === column.columnDef) {
                            if (this.sort === "ASC") {
                                this.sort = "DESC";
                            } else if (this.sort === "DESC") {
                                this.sort = "";
                            } else {
                                this.sort = "ASC";
                            }
                        } else {
                            this.sortColumn = column.columnDef;
                            this.sort = "ASC";
                        }
                        this.createBody();
                    });
                }

                tableRow.appendChild(tableHeader);
            });

            return tableRow;
        };

        const createFilterRow = (): HTMLTableRowElement => {
            const tableRow = this.utils.createElement<HTMLTableRowElement>("tr");

            this.config.columns.forEach((column) => {
                const tableHeader = this.utils.createElement<HTMLTableHeaderCellElement>("th");
                if (column.filter) {
                    if (column.filter.type === "STRING") {
                        const input = this.utils.createElement<HTMLInputElement>("input");
                        input.addEventListener("keyup", (e) => this.setFilter(this.utils.getRowName(column), input.value));
                        tableHeader.appendChild(input);
                    }
                    if (column.filter.type === "NUMBER") {
                        const input = this.utils.createElement<HTMLInputElement>("input");
                        input.addEventListener("keyup",
                            (e) => e.key !== "Enter" && this.setFilter(this.utils.getRowName(column), input.value));
                        input.addEventListener("change", (e) => this.setFilter(this.utils.getRowName(column), input.value));
                        input.type = "number";
                        tableHeader.appendChild(input);
                    }
                }
                tableRow.appendChild(tableHeader);
            });

            return tableRow;
        };

        this.tableHeader.appendChild(createFirstRow());
        if (hasAnyFilter) {
            this.tableHeader.appendChild(createFilterRow());
        }
    }

    private createFooter(): void {
        const createFooterRow = (): HTMLTableRowElement => {
            const tableRow = this.utils.createElement<HTMLTableRowElement>("tr");

            this.config.columns.forEach((column) => {
                const tableCell = this.utils.createElement<HTMLTableHeaderCellElement>("td");
                const getNumberData = (): number[] => this.realData.map((row) => Number(this.getText(column, row)));
                if (typeof column.customFooter === "function") {
                    tableCell.innerText = column.customFooter(this.realData.entries());
                } else if (column.footer === FooterType.MAX) {
                    tableCell.innerText = "Max: " + Math.max(...getNumberData());
                } else if (column.footer === FooterType.MIN) {
                    tableCell.innerText = "Min: " + Math.min(...getNumberData());
                } else if (column.footer === FooterType.SUM) {
                    tableCell.innerText = "Sum: " + getNumberData().reduce((acc, val) => acc + val);
                } else if (column.footer === FooterType.AVG) {
                    const data = getNumberData();
                    tableCell.innerText = "Avg: " + data.reduce((acc, val) => acc + val) / data.length;
                }

                tableRow.appendChild(tableCell);
            });

            return tableRow;
        };
        this.tableFooter.appendChild(createFooterRow());
    }

    private createBody(): void {
        const createCell = (rowData: T, config: TableColumnConfigInterface, cellIndex: number): HTMLTableCellElement | null => {
            const columnTitle = this.utils.getRowName(config);
            const text = this.getText(config, rowData);
            const filterValue: string | number = this.filters[columnTitle];
            if (typeof filterValue === "string" && String(text).indexOf(filterValue) < 0) {
                return null;
            }

            const tableCell = this.utils.createElement<HTMLTableCellElement>("td");
            tableCell.innerText = String(text);

            return tableCell;
        };

        const createRow = (rowData: T, rowIndex: number): HTMLTableRowElement | null => {
            const tableRow = this.utils.createElement<HTMLTableRowElement>("tr");

            for (let columnIndex = 0; columnIndex < this.config.columns.length; columnIndex++) {
                const columnConfig = this.config.columns[columnIndex];
                const newRow: HTMLTableCellElement | null = createCell(rowData, columnConfig, columnIndex);
                if (!newRow) {
                    return null;
                }
                tableRow.appendChild(newRow);
            }

            return tableRow;
        };

        this.tableBody.innerHTML = "";

        this.realData = [...this.defaultData].sort((a, b) => {
            if (!this.sort || !this.sortColumn) {
                return 0;
            }
            if (this.sort === "ASC") {
                return String(a[this.sortColumn]).localeCompare(b[this.sortColumn]);
            }

            return String(b[this.sortColumn]).localeCompare(a[this.sortColumn]);

        });
        this.realData.forEach((row: any, index: number) => {
            const newRow = createRow(row, index);
            if (newRow) {
                this.tableBody.appendChild(newRow);
            }
        });
    }
}
