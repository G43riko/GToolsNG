export class FilterModel {
    public type: "eq" | "gt" | "lt" | "between" | "like" | "likeInsensitive" | "loe" | "goe";
    public value: any;
    public attribute: string;
}
