import {Injectable} from "@angular/core";
import {BehaviorSubject, timer} from "rxjs";
import {debounce} from "rxjs/operators";
import {FilterModel} from "../models/filter.model";

let counter = 1;

@Injectable()
export class CoreTableService<T = any> {
    public readonly id = counter++;
    public debounceTime = 200;
    private readonly localFilter$ = new BehaviorSubject<FilterModel[]>([]);
    public filter$ = this.localFilter$.pipe(debounce(() => timer(this.debounceTime)));
    private filters: { [key: string]: FilterModel } = {};

    public constructor() {
        console.log("ja som CoreTableService " + this.id);
    }

    public process(filters: FilterModel[], data: T[]): T[] {
        return data.filter((item) => filters.every((filter) => this.check(filter, item)));
    }

    public setFilter(type: "STRING" | "NUMBER" | "BOOLEAN" | "SELECT" | "DATE_RANGE" | "NUMBER_RANGE", value: string | { min: number | string, max: number | string }, column: string): void {
        const newFilter = new FilterModel();
        newFilter.value = value;
        newFilter.attribute = column;
        if (type === "SELECT") {
            newFilter.type = "eq";
        } else if (type === "NUMBER_RANGE") {
            newFilter.type = "between";
        } else if (type === "STRING") {
            newFilter.type = "likeInsensitive";
        }
        this.filters[column] = newFilter;
        this.localFilter$.next(Object.values(this.filters));
    }

    private check(filter: FilterModel, item: T): boolean {
        const checkBetween = (min, max, value): boolean => {
            if (!isNaN(min === "" ? "false" : min) && value < min) {
                return false;
            }
            if (!isNaN(max === "" ? "false" : max) && value > max) {
                return false;
            }

            return true;
        };
        switch (filter.type) {
            case "eq":
                return !filter.value || item[filter.attribute] === filter.value;
            case "lt":
                return !filter.value || item[filter.attribute] < filter.value;
            case "gt":
                return !filter.value || item[filter.attribute] > filter.value;
            case "loe":
                return !filter.value || item[filter.attribute] <= filter.value;
            case "goe":
                return !filter.value || item[filter.attribute] >= filter.value;
            case "like":
                return !filter.value || String(item[filter.attribute]).includes(filter.value);
            case "likeInsensitive":
                return !filter.value || String(item[filter.attribute]).toLowerCase().includes(filter.value.toLowerCase());
            case "between":
                return !filter.value || checkBetween(filter.value.min, filter.value.max, item[filter.attribute]);
            default:
                return true;
        }
    }
}
