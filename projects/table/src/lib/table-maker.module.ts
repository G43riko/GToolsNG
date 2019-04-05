import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreTableColumnComponent } from './components/core-table-column/core-table-column.component';
import { CoreTableFilterComponent } from './components/core-table-filter/core-table-filter.component';
import { CoreTableComponent } from './components/core-table/core-table.component';
import { TableComponent } from './table.component';

@NgModule({
    declarations: [
        TableComponent,
        CoreTableComponent,
        CoreTableFilterComponent,
        CoreTableColumnComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CoreTableComponent,
        CoreTableFilterComponent,
        CoreTableColumnComponent,
    ]
})
export class TableMakerModule {
}
