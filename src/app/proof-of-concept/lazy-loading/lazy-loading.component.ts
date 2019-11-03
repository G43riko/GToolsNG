import {Component, ElementRef, OnInit} from "@angular/core";

@Component({
    selector: "lazy-loading",
    templateUrl: "./lazy-loading.component.html",
    styleUrls: ["./lazy-loading.component.scss"]
})
export class LazyLoadingComponent implements OnInit {
    public static readonly IMAGES = 809;
    public readonly imageLinks = [];

    public constructor(private readonly elementRef: ElementRef) {
        for (let i = 1; i <= LazyLoadingComponent.IMAGES; i++) {
            this.imageLinks.push(String(i).padStart(3, "0"));
        }
    }

    public get images(): number {
        return this.imageLinks.length;
    }

    public get loadedImages(): number {
        return this.elementRef.nativeElement.querySelectorAll("img[src]").length;
    }

    public ngOnInit(): void {
    }

}
