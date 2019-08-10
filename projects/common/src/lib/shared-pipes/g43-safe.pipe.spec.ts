import {TestBed} from "@angular/core/testing";
import {BrowserModule} from "@angular/platform-browser";
import {G43SafePipe} from "./g43-safe.pipe";

xdescribe("SafePipe", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserModule,
            ],
        });
    });
    it("create an instance", () => {
        const pipe = TestBed.get(G43SafePipe);
        expect(pipe).toBeTruthy();
    });
});
