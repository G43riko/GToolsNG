import {Component, OnInit} from "@angular/core";
import {AppConfig} from "../../../app-config";
import {environment} from "../../../environments/environment";

@Component({
    selector: "welcome",
    templateUrl: "./welcome.component.html",
    styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent implements OnInit {
    public readonly title = AppConfig.TITLE;
    public readonly modules = AppConfig.MODULES;
    public readonly url = environment.url;

    public ngOnInit(): void {
        // empty
    }

}
