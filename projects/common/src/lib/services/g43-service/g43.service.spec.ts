import {TestBed} from "@angular/core/testing";
import {G43TestingModule} from "../../testing/testing.module";
import {GT_NOTIFICATION_TOKEN} from "../gt-notification/gt-notification.interface";
import {G43Service} from "./abstract.service";

describe("AbstractService", () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            G43TestingModule,
        ],
        providers: [
            G43Service,
            {provide: GT_NOTIFICATION_TOKEN, useClass: {}},
            {provide: String, useValue: "something"},
        ]
    }));

    it("should be created", () => {
        const service: G43Service = TestBed.get(G43Service);
        expect(service).toBeTruthy();
    });
});
