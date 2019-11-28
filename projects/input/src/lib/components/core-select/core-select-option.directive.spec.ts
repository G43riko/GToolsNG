import {CoreSelectOptionDirective} from "./core-select-option.directive";

describe("CoreOptionDirective", () => {
    it("should create an instance", () => {
        const directive = new CoreSelectOptionDirective({nativeElement: {}});
        expect(directive).toBeTruthy();
    });
});
