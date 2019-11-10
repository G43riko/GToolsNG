import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";

@Component({
    selector: "test-core-select",
    templateUrl: "./test-core-select.component.html",
    styleUrls: ["./test-core-select.component.scss"]
})
export class TestCoreSelectComponent implements OnInit {
    public readonly characterValues = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    public readonly controlA = new FormControl();
    public readonly controlB = new FormControl();
    public readonly controlC = new FormControl();
    public readonly controlD = new FormControl();
    public readonly controlE = new FormControl();
    public readonly controlF = new FormControl();
    public readonly controlG = new FormControl();
    public constructor() {
    }

    public ngOnInit(): void {
    }

}
