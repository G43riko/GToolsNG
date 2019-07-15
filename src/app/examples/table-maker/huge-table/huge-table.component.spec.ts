import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableMakerModule } from '@gt/table';

import { HugeTableComponent } from './huge-table.component';

describe('HugeTableComponent', () => {
    let component: HugeTableComponent;
    let fixture: ComponentFixture<HugeTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                TableMakerModule,
            ],
            declarations: [
                HugeTableComponent,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HugeTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
