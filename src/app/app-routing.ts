import {Routes} from "@angular/router";
import {AboutComponent} from "./pages/about/about.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";

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
        loadChildren: () => import("./examples/table-maker/table-maker-example.module").then((mod) => mod.TableMakerExampleModule),
    },
    {
        path: "input",
        loadChildren: () => import("./examples/input/input-example.module").then((mod) => mod.InputExampleModule),
    },
    {
        path: "menu",
        loadChildren: () => import("./examples/menu/menu-example.module").then((mod) => mod.MenuExampleModule),
    },
    {
        path: "poc",
        loadChildren: () => import("./proof-of-concept/proof-of-concept.module").then((mod) => mod.ProofOfConceptModule),
    },
    {
        path: "**",
        redirectTo: "home",
    },
];
