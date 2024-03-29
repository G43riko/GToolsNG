import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {TranslateModule} from "@ngx-translate/core";
import {TableMakerModule} from "@g43/table";
import {BasicTableComponent} from "./basic-table/basic-table.component";
import {HugeTableFramedComponent} from "./huge-table-framed/huge-table-framed.component";
import {HugeTableComponent} from "./huge-table/huge-table.component";
import {TableMakerExampleRoutingModule} from "./table-maker-example-routing.module";
import {TableMakerExampleComponent} from "./table-maker-example.component";

@NgModule({
    declarations: [
        TableMakerExampleComponent,
        BasicTableComponent,
        HugeTableComponent,
        HugeTableFramedComponent,
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
