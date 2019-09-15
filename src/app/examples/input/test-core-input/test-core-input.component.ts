import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: "test-core-input",
    templateUrl: "./test-core-input.component.html",
    styleUrls: ["./test-core-input.component.scss"]
})
export class TestCoreInputComponent implements OnInit {
    public readonly nameFormControl = new FormControl("someText");
    public readonly personFormGroup: FormGroup;

    public constructor(private readonly formBuilder: FormBuilder) {
        this.personFormGroup = formBuilder.group({
            name: ["Gabriel"],
            surName: "",
            ageDisabled: 26,
            ageDisabledInput: 12,
            age: 34,
        });
        this.personFormGroup.controls.ageDisabled.disable();
    }

    public ngOnInit() {
        // empty
    }

}
