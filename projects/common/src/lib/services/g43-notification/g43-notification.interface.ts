import { InjectionToken } from "@angular/core";

export interface G43Notification {
    openErrorNotification(error: any): void;

    openInfoNotification(info: any): void;

    openSuccessNotification(success: any): void;
}

export const G43_NOTIFICATION_TOKEN = new InjectionToken<G43Notification>("G43Notification");
