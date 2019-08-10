import { Component, Input, OnInit } from "@angular/core";
import { TableFilterConfigInterface } from "../../interfaces/table-filter-config.interface";

@Component({
    selector: "g43-table-filter",
    templateUrl: "./core-table-filter.component.html",
    styleUrls: ["./core-table-filter.component.scss"]
})
export class CoreTableFilterComponent implements OnInit {
    @Input() public filterConfig: TableFilterConfigInterface;
    @Input() public width: string;
    public constructor() {
    }

    public ngOnInit(): void {
    }
}
