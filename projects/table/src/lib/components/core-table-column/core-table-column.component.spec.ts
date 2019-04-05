import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreTableColumnComponent } from './core-table-column.component';

describe('CoreTableColumnComponent', () => {
    let component: CoreTableColumnComponent;
    let fixture: ComponentFixture<CoreTableColumnComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CoreTableColumnComponent]
        })
               .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoreTableColumnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
