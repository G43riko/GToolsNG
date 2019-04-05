import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableMakerModule } from '../../../../projects/table/src/lib/table-maker.module';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { TableMakerExampleRoutingModule } from './table-maker-example-routing.module';
import { TableMakerExampleComponent } from './table-maker-example.component';

@NgModule({
    declarations: [
        TableMakerExampleComponent,
        BasicTableComponent,
    ],
    imports: [
        CommonModule,
        TableMakerModule,
        TableMakerExampleRoutingModule,
    ]
})
export class TableMakerExampleModule {
}
