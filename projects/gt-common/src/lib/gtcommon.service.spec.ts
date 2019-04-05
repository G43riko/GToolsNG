import { TestBed } from '@angular/core/testing';

import { GTCommonService } from './gtcommon.service';

describe('GTCommonService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: GTCommonService = TestBed.get(GTCommonService);
        expect(service).toBeTruthy();
    });
});
