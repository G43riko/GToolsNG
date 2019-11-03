import {Directive, ElementRef, Input, Renderer2} from "@angular/core";

@Directive({
    selector: "img[lazyLoading]"
})
export class LazyLoadingDirective {
    @Input("lazyLoading") public url: string;

    public constructor(private readonly element: ElementRef,
                       private readonly renderer: Renderer2) {

        this.lazyLoad(this.element.nativeElement);
    }

    private lazyLoad(target): void {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log("intersecting");
                    const img = entry.target;
                    this.renderer.setAttribute(img, "src", this.url);
                    observer.disconnect();
                }
            });
        });
        io.observe(target);
    };

}
