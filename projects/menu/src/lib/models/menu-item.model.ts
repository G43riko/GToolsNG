import {TemplateRef} from "@angular/core";

export class MenuItem<T = any> {

    public constructor(public label: string,
                       public action: string | (() => any),
                       public icon: string,
                       public template?: TemplateRef<T>) {
    }

    public static create(label: string, path = label, icon = "", ): MenuItem {
        return new MenuItem(label, path, icon);
    }

    public static createFromTemplate<T = any>(template: TemplateRef<T>): MenuItem {
        return new MenuItem("", "", "", template);
    }
}
