import { InjectionToken } from '@angular/core';

export interface GTNotification {
    openErrorNotification(error: any): void;

    openInfoNotification(info: any): void;

    openSuccessNotification(success: any): void;
}

export const GT_NOTIFICATION_TOKEN = new InjectionToken<GTNotification>('GTNotification');
