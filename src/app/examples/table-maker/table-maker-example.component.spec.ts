import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMakerExampleComponent } from './table-maker-example.component';

describe('TableMakerExampleComponent', () => {
    let component: TableMakerExampleComponent;
    let fixture: ComponentFixture<TableMakerExampleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TableMakerExampleComponent]
        })
               .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableMakerExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
