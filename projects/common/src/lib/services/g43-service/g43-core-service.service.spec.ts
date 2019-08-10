import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { CoreService } from "./core-service.service";

describe("CoreService", () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientModule,
        ],
        providers: [
            CoreService,
        ]
    }));

    it("should be created", () => {
        const service: CoreService<any> = TestBed.get(CoreService);
        expect(service).toBeTruthy();
    });
});
