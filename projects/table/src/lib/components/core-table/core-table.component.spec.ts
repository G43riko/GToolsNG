import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreTableColumnComponent } from '@table/lib/components/core-table-column/core-table-column.component';
import { CoreTableFilterComponent } from '@table/lib/components/core-table-filter/core-table-filter.component';

import { CoreTableComponent } from './core-table.component';

describe('CoreTableComponent', () => {
    let component: CoreTableComponent;
    let fixture: ComponentFixture<CoreTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CoreTableFilterComponent,
                CoreTableColumnComponent,
                CoreTableComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoreTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
