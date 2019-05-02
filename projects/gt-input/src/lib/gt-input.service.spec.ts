import { TestBed } from '@angular/core/testing';

import { GtInputService } from './gt-input.service';

describe('GtInputService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: GtInputService = TestBed.get(GtInputService);
        expect(service).toBeTruthy();
    });
});
