import { Component, OnInit } from "@angular/core";
import {AppConfig} from "../../../app-config";

@Component({
    selector: "welcome",
    templateUrl: "./welcome.component.html",
    styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent implements OnInit {
    public title = AppConfig.TITLE;

    public ngOnInit(): void {
        // empty
    }

}
