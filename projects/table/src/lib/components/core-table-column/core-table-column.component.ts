import {ChangeDetectionStrategy, Component, Input, OnInit} from "@angular/core";
import {TableColumnConfigInterface} from "../../interfaces/table-column-config.interface";

@Component({
    selector: "g43-table-column",
    templateUrl: "./core-table-column.component.html",
    styleUrls: ["./core-table-column.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreTableColumnComponent implements OnInit {
    @Input() public columnConfig: TableColumnConfigInterface;
    @Input() public rowIndex: number;
    @Input() public columnIndex: number;
    @Input() public edited = true;
    @Input() public row: any;

    public constructor() {
    }

    public get editable() {
        if (!this.columnConfig) {
            return false;
        }

        if (this.columnConfig.customValue) {
            return false;
        }
        if (this.columnConfig.tableCellTemplate) {
            return false;
        }

        return !this.columnConfig.tableCellTemplate;
    }

    public get contentAlign(): string {
        if (!this.columnConfig.contentAlign) {
            switch (this.type) {
                case "boolean":
                    return "center";
                case "number":
                    return "right";
                default:
                    return "left";
            }
        }

        return this.columnConfig.contentAlign;
    }

    public get type() {
        if (this.columnConfig.tableCellTemplate) {
            return "template";
        }
        if (!this.columnConfig.type) {
            return "string";
        }

        return this.columnConfig.type;
    }

    public get value() {
        if (!this.columnConfig) {
            return null;
        }
        if (typeof this.columnConfig.customValue === "function") {
            return this.columnConfig.customValue(this.row);
        }

        return this.row[this.columnConfig.columnDef];
    }

    public ngOnInit(): void {
    }
}
