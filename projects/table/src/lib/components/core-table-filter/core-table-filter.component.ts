import { Component, Input, OnInit } from '@angular/core';
import { TableFilterConfigInterface } from '../../interfaces/table-filter-config.interface';

@Component({
    selector: 'gt-core-table-filter',
    templateUrl: './core-table-filter.component.html',
    styleUrls: ['./core-table-filter.component.css']
})
export class CoreTableFilterComponent implements OnInit {
    @Input() public filterConfig: TableFilterConfigInterface;

    public constructor() {
    }

    public ngOnInit(): void {
    }

}
