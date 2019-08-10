import {Component, OnInit, TemplateRef, ViewChild} from "@angular/core";
import {MenuItem} from "@g43/menu";
import { TranslateService } from "@ngx-translate/core";
import { menuItems } from "./menu-items";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit{
    @ViewChild("languageSwitcher", {static: true}) public languageSwitcher: TemplateRef<HTMLDivElement>;
    public readonly menuItems = [];
    public currentLang;

    public constructor(public readonly translate: TranslateService) {
        translate.currentLang = translate.getBrowserLang();

        translate.setDefaultLang(translate.currentLang);
        translate.use(translate.currentLang);
    }
    public ngOnInit(): void {
        this.menuItems.push(MenuItem.createFromTemplate(this.languageSwitcher), ...menuItems);
    }


    public switchLanguage(): void {
        this.translate.use(this.translate.currentLang === "en" ? "sk" : "en");
    }
}

