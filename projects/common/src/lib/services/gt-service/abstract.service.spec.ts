import {TestBed} from "@angular/core/testing";
import {TestingModule} from "../../testing/testing.module";
import {GT_NOTIFICATION_TOKEN} from "../gt-notification/gt-notification.interface";
import {AbstractService} from "./abstract.service";

describe("AbstractService", () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            TestingModule,
        ],
        providers: [
            AbstractService,
            {provide: GT_NOTIFICATION_TOKEN, useClass: {}},
            {provide: String, useValue: "something"},
        ]
    }));

    it("should be created", () => {
        const service: AbstractService = TestBed.get(AbstractService);
        expect(service).toBeTruthy();
    });
});
