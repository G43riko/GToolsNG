import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtInputComponent } from './@g43/input.component';

describe('GtInputComponent', () => {
    let component: GtInputComponent;
    let fixture: ComponentFixture<GtInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GtInputComponent]
        })
               .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GtInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
