import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import {StateService} from "../../services/state.service";

@Component({
    selector: "menu-example",
    templateUrl: "./menu-example.component.html",
    styleUrls: ["./menu-example.component.scss"]
})
export class MenuExampleComponent implements OnInit {
    public readonly menuTypeFormControl = new FormControl(this.stateService.menuType);
    public readonly backdropFormControl = new FormControl(this.stateService.backdrop);
    public readonly topMenuHeightInputFormControl = new FormControl(this.stateService.topMenuHeight);

    public constructor(private readonly stateService: StateService) {
    }


    public ngOnInit(): void {
        this.menuTypeFormControl.valueChanges.subscribe((value) => {
            this.stateService.menuType = value;
        });
        this.backdropFormControl.valueChanges.subscribe((value) => {
            this.stateService.backdrop = value;
        });
        this.topMenuHeightInputFormControl.valueChanges.subscribe((value) => {
            this.stateService.topMenuHeight = value;
        });
    }

}
