import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableMakerModule } from '@g43/table';
import { AppTestingModule } from '../../tests/app-testing.module';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { HugeTableComponent } from './huge-table/huge-table.component';

import { TableMakerExampleComponent } from './table-maker-example.component';

describe('TableMakerExampleComponent', () => {
    let component: TableMakerExampleComponent;
    let fixture: ComponentFixture<TableMakerExampleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule,
                TableMakerModule,
            ],
            declarations: [
                BasicTableComponent,
                HugeTableComponent,
                TableMakerExampleComponent,
            ],
        }).compileComponents();
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
