import {Injectable} from "@angular/core";
import {G43Notification} from "@g43/common";

@Injectable({
    providedIn: "root"
})
export class NotificationService implements G43Notification {
    public openErrorNotification(error: any): void {
        console.error(error);
    }

    public openInfoNotification(info: any): void {
        console.warn(info);
    }

    public openSuccessNotification(success: any): void {
        console.log(success);
    }

    public constructor() {
    }
}
