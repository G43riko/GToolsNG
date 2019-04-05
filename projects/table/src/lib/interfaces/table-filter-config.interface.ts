import { TemplateRef } from '@angular/core';
import { KeyValue } from './key-value.interface';

export interface TableFilterConfigInterface {
    /**
     * Type of filtering
     *
     */
    type: 'STRING' | 'NUMBER' | 'BOOLEAN' | 'SELECT' | 'DATE_RANGE' | 'NUMBER_RANGE';

    /**
     * Values used in select input
     */
    selectValues?: KeyValue<string, string>[];

    /**
     * Enable / Disable filtering
     *
     */
    enabled?: boolean;

    min?: string;

    max?: string;

    /**
     * A template for a custom filter element
     */
    template?: TemplateRef<any>;
}
