import {TestBed} from "@angular/core/testing";
import {G43TestingModule} from "../../testing/g43-testing.module";
import {G43_NOTIFICATION_TOKEN} from "../g43-notification/g43-notification.interface";
import {G43Service} from "./g43.service";

describe("AbstractService", () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            G43TestingModule,
        ],
        providers: [
            G43Service,
            {provide: G43_NOTIFICATION_TOKEN, useClass: {}},
            {provide: String, useValue: "something"},
        ]
    }));

    it("should be created", () => {
        const service: G43Service = TestBed.get(G43Service);
        expect(service).toBeTruthy();
    });
});
