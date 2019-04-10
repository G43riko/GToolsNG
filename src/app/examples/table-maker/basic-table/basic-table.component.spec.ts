import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GTCommonModule } from '@gt-common';
import { TableMakerModule } from '@table';
import { AppTestingModule } from '../../../tests/app-testing.module';

import { BasicTableComponent } from './basic-table.component';

describe('BasicTableComponent', () => {
    let component: BasicTableComponent;
    let fixture: ComponentFixture<BasicTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule,
                TableMakerModule,
                GTCommonModule,
            ],
            declarations: [
                BasicTableComponent,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BasicTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
