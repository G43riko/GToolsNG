import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {G43FileSizePipe} from "./g43-file-size.pipe";
import {G43SafePipe} from "./g43-safe.pipe";


@NgModule({
    declarations: [
        G43FileSizePipe,
        G43SafePipe,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        G43FileSizePipe,
        G43SafePipe,
    ]
})
export class G43SharedPipesModule {
}
