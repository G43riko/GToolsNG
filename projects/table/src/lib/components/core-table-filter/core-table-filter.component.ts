import {ChangeDetectionStrategy, Component, Input, OnInit} from "@angular/core";
import {TableFilterConfigInterface} from "../../interfaces/table-filter-config.interface";
import {CoreTableService} from "../core-table.service";

@Component({
    selector: "g43-table-filter",
    templateUrl: "./core-table-filter.component.html",
    styleUrls: ["./core-table-filter.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreTableFilterComponent implements OnInit {
    @Input() public filterConfig: TableFilterConfigInterface;
    @Input() public width: string;
    @Input() public column: string;

    public constructor(private readonly coreTableService: CoreTableService) {
    }

    public ngOnInit(): void {
    }


    public setSelectValue(value: string): void {
        this.coreTableService.setFilter(this.filterConfig.type, value, this.column);
    }

    public setNumberRange(min: string, max: string): void {
        this.coreTableService.setFilter(this.filterConfig.type, {min, max}, this.column);
    }

    public setLike(value: string): void {
        this.coreTableService.setFilter(this.filterConfig.type, value, this.column);
    }
}
