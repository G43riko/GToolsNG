import {Component, ElementRef, Inject, Input, OnDestroy, OnInit, Optional, QueryList, ViewChildren, ViewEncapsulation} from "@angular/core";
import {G43_TRANSLATE_TOKEN, G43Translation} from "@g43/common";
import {Observable, of, Subscription} from "rxjs";
import {TableColumnConfigInterface} from "../../interfaces/table-column-config.interface";
import {TableConfigInterface} from "../../interfaces/table-config.interface";
import {CoreTableFilterComponent} from "../core-table-filter/core-table-filter.component";
import {CoreTableService} from "../core-table.service";

@Component({
    selector: "g43-table",
    templateUrl: "./core-table.component.html",
    styleUrls: ["./core-table.component.scss"],
    providers: [CoreTableService],
    encapsulation: ViewEncapsulation.None
})
export class CoreTableComponent implements OnInit, OnDestroy {
    @Input() public tableConfig: TableConfigInterface;
    @Input() public data: Observable<any[]>;
    public realData: any[];
    @ViewChildren(CoreTableFilterComponent) public filters: QueryList<CoreTableFilterComponent>;
    @ViewChildren("selectionCheckbox") public checkboxes: QueryList<ElementRef<HTMLInputElement>>;
    private subscription: Subscription;

    public constructor(@Optional() @Inject(G43_TRANSLATE_TOKEN) private readonly translationService: G43Translation,
                       private readonly coreTableService: CoreTableService) {
    }

    public widthFor(columnConfig: TableColumnConfigInterface): string {
        return columnConfig.width || "auto";
    }

    public get hasSelection(): boolean {
        if (!this.tableConfig) {
            return false;
        }

        return this.tableConfig.selectable === "MULTI" || this.tableConfig.selectable === "SINGLE";
    }

    public ngOnInit(): void {
        let innerSubscription;
        this.subscription = this.data.subscribe((data) => {
            if (innerSubscription) {
                innerSubscription.unsubscribe();
            }
            innerSubscription = this.coreTableService.filter$.subscribe((filters) => {
                this.realData = this.coreTableService.process(filters, data);
            });
        });

        // this.coreTableService.filter$.pipe(
        //     mergeMap(() => this.data, (filters, data) => {
        //         return this.coreTableService.process(filters, data);
        //     })
        // ).subscribe((data) => {
        //     this.realData = data;
        // });
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

    public get visibleColumns(): TableColumnConfigInterface[] {
        return this.tableConfig.columns.filter((column) => column.visible !== false);
    }

    public onRowClick(row: any, rowIndex: number) {
        if (typeof this.tableConfig.onRowClick !== "function") {
            return;
        }

        this.tableConfig.onRowClick(row, rowIndex);
    }

    public getCellClass(row: any, rowIndex: number, columnIndex: number, config: TableColumnConfigInterface): string {
        if (typeof config.cellClass !== "function") {
            return "";
        }

        return config.cellClass(row, rowIndex, columnIndex);
    }

    public onSelectAll(selectAll: boolean): void {
        this.checkboxes.forEach((e) => {
            e.nativeElement.checked = selectAll;
        });
    }

    public changeCheckbox(row: any, checkboxInput: HTMLInputElement): void {
        if (this.tableConfig.selectable === "SINGLE") {
            const value = checkboxInput.checked;
            this.checkboxes.forEach((e) => {
                e.nativeElement.checked = false;
            });
            checkboxInput.checked = value;
        }
    }

    public getRowClass(row: any, rowIndex: number): string {
        switch (typeof this.tableConfig.rowClass) {
            case "function":
                return this.tableConfig.rowClass(row, rowIndex);
            case "string":
                return this.tableConfig.rowClass;
            default:
                return "";
        }
    }

    public trackByFn(index, item) {
        return item.id;
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}

