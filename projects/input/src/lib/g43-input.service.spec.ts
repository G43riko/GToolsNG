import {TestBed} from "@angular/core/testing";
import {G43InputService} from "./g43-input.service";


describe("GtInputService", () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it("should be created", () => {
        const service: G43InputService = TestBed.get(G43InputService);
        expect(service).toBeTruthy();
    });
});
