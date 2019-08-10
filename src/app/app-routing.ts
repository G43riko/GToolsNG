import { Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { WelcomeComponent } from "./pages/welcome/welcome.component";

export const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
    },
    {
        path: "home",
        component: WelcomeComponent,
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "table",
        loadChildren: "./examples/table-maker/table-maker-example.module#TableMakerExampleModule",
    },
    {
        path: "input",
        loadChildren: "./examples/input/input-example.module#InputExampleModule",
    },
    {
        path: "**",
        redirectTo: "home",
    },
];
