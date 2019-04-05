import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableMakerExampleComponent } from './table-maker-example.component';

const routes: Routes = [{
    path: '',
    children: [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: 'overview',
        },
        {
            path: 'overview',
            component: TableMakerExampleComponent,
        }
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TableMakerExampleRoutingModule {
}
