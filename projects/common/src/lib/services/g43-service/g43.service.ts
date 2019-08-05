import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import {G43Notification} from "../g43-notification/g43-notification.interface";
import {G43CoreService} from "./g43-core-service.service";

export abstract class G43Service<T = any> extends G43CoreService<T> {
    protected constructor(http: HttpClient,
                          notificationService: G43Notification) {
        super(http, notificationService);
    }

    protected getImage(url: string, sendHeaders = true): Observable<Blob> {
        return this.get<Blob>({
            url,
            responseType: "blob",
            headers: sendHeaders ? this.getHeader() : undefined,
        });
    }

    protected uploadLink<S = T>(url: string, link: string, name: string, fileName = "image.jpg"): Observable<S> {
        return this.getImage(url, false).pipe(switchMap((myBlob) => {
            return this.uploadFile<S>(url, myBlob as File, name, fileName);
        }));
    }

    protected uploadFile<S = T>(url: string, file: File, name: string, fileName = file.name): Observable<S> {
        const fd = new FormData();
        fd.append(name, file, fileName);

        return this.post({
            url,
            body: fd,
        });
    }

    protected uploadFiles<S = T>(url: string, files: File[], name: string): Observable<S> {
        const fd = new FormData();
        for (const file of files) {
            fd.append(name, file, file.name);
        }

        return this.post({
            url,
            body: fd,
        });
    }
}
