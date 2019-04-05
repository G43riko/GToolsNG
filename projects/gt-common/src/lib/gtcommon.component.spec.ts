import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GTCommonComponent } from './gtcommon.component';

describe('GTCommonComponent', () => {
    let component: GTCommonComponent;
    let fixture: ComponentFixture<GTCommonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GTCommonComponent]
        })
               .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GTCommonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
