import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {TableMakerModule} from "@g43/table";
import {TranslateModule} from "@ngx-translate/core";
import {BasicTableComponent} from "./basic-table/basic-table.component";
import {HugeTableComponent} from "./huge-table/huge-table.component";
import {TableMakerExampleRoutingModule} from "./table-maker-example-routing.module";
import {TableMakerExampleComponent} from "./table-maker-example.component";

@NgModule({
    declarations: [
        TableMakerExampleComponent,
        BasicTableComponent,
        HugeTableComponent,
    ],
    imports: [
        CommonModule,
        TableMakerModule,
        TranslateModule,
        TableMakerExampleRoutingModule,
    ]
})
export class TableMakerExampleModule {
}
