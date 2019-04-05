export class MenuItem {

    public constructor(public label: string,
                       public url: string,
                       public icon: string,
                       public action: any = null) {
    }

    public static create(label: string, path = label, icon = ''): MenuItem {
        return new MenuItem(label, path, icon);
    }
}
