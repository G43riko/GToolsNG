import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CoreTableColumnComponent } from "./components/core-table-column/core-table-column.component";
import { CoreTableFilterComponent } from "./components/core-table-filter/core-table-filter.component";
import { CoreTableComponent } from "./components/core-table/core-table.component";

@NgModule({
    declarations: [
        CoreTableComponent,
        CoreTableFilterComponent,
        CoreTableColumnComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        CoreTableComponent,
        CoreTableFilterComponent,
        CoreTableColumnComponent,
    ]
})
export class TableMakerModule {
}
