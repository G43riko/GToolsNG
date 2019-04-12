import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableConfigInterface } from '@table';
import { Observable, of } from 'rxjs';
import { Movie, movies } from '../../../mock/data/movies.data';

@Component({
    selector: 'huge-table',
    templateUrl: './huge-table.component.html',
    styleUrls: ['./huge-table.component.scss']
})
export class HugeTableComponent implements OnInit {
    @ViewChild('grossColumn') public grossColumn: TemplateRef<any>;
    @ViewChild('budgetColumn') public budgetColumn: TemplateRef<any>;
    @ViewChild('actorsColumn') public actorsColumn: TemplateRef<any>;

    public tableConfig: TableConfigInterface;
    public readonly data: Observable<Movie[]> = of(movies.filter((e, i) => i < 10));
    public readonly title = 'TableMaker';

    public ngOnInit(): void {
        this.tableConfig = {
            // onRowClick: (row: any) => alert("Age: " + row.age),
            // selectable: 'SINGLE',
            columns: [
                {
                    labelKey: 'movies.title',
                    columnDef: 'movie_title',
                    sort: true,
                    filter: {
                        type: 'STRING',
                    }
                },
                {
                    labelKey: 'movies.actors',
                    tableCellTemplate: this.actorsColumn,
                    columnDef: 'actors'
                },
                {
                    labelKey: 'movies.year',
                    columnDef: 'title_year',
                    sort: true,
                    type: 'number',
                    width: '100px',
                    filter: {
                        type: 'NUMBER_RANGE',
                        min: '1800',
                        max: '2100',
                    }
                },
                {
                    labelKey: 'movies.budget',
                    columnDef: 'budget',
                    tableCellTemplate: this.budgetColumn,
                },
                {
                    labelKey: 'movies.gross',
                    tableCellTemplate: this.grossColumn,
                    columnDef: 'gross',
                },
                {
                    labelKey: 'movies.contentRating',
                    columnDef: 'content_rating',
                    width: '70px',
                    sort: true,
                    filter: {
                        type: 'STRING',
                    }
                },
                {
                    labelKey: 'movies.director',
                    columnDef: 'director_name',
                    customValue: (row) => `${ row.director_name }(${ row.director_facebook_likes })`,
                    sort: true,
                    filter: {
                        type: 'STRING',
                    }
                },
                {
                    labelKey: 'movies.duration',
                    columnDef: 'duration',
                    width: '100px',
                    sort: true,
                    customValue: (row) => row.duration ? row.duration + ' min' : row.duration,
                    filter: {
                        type: 'NUMBER_RANGE',
                        min: '0',
                        max: '500',
                    }
                },
                {
                    labelKey: 'movies.genres',
                    columnDef: 'genres',
                    sort: true,
                    customValue: (row) => row.genres ? row.genres.replace(/\|/g, ', ') : row.genres,
                    filter: {
                        type: 'STRING',
                    }
                },
                /*
                {
                    labelKey: 'movies.country',
                    columnDef: 'country',
                    width: '100px',
                    sort: true,
                    filter: {
                        type: 'STRING',
                    }
                },
                {
                    labelKey: 'movies.language',
                    columnDef: 'language',
                    sort: true,
                    filter: {
                        type: 'STRING',
                    }
                },
                {
                    labelKey: 'movies.content',
                    columnDef: 'plot_keywords',
                    sort: true,
                    filter: {
                        type: 'STRING',
                    }
                },
                {
                    labelKey: 'movies.aspectRation',
                    columnDef: 'aspect_ration',
                    sort: true,
                    type: 'number',
                    filter: {
                        type: 'NUMBER',
                    }
                }
                 */
            ]
        };
    }
}
