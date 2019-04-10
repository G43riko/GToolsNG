export class MenuItem {

    public constructor(public label: string,
                       public action: string | (() => any),
                       public icon: string) {
    }

    public static create(label: string, path = label, icon = ''): MenuItem {
        return new MenuItem(label, path, icon);
    }
}
