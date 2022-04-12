import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ButtonModule } from "./button/button.module";
import { StartPageModule } from "./start-page/start-page.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LocatoinApiService } from "./shared/services/location.api.service";
import { ErrorInterceptor } from "./interceptors/error.interceptor";
import { TokenInterceptor } from "./interceptors/tocen.interceptor";
import { LocationService } from "./shared/services/location.service";
import { OrderService } from "./shared/services/order.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StartPageModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    LocatoinApiService,
    LocationService,
    OrderService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
