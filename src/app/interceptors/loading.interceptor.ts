import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";
import { LoadingService } from "../shared/services/loading.service";

@Injectable({ providedIn: "root" })
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.showLoader();

    return next
      .handle(req)
      .pipe(finalize(() => this.loadingService.hideLoader()));
  }
}
