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
import { TokenInterceptor } from "./interceptors/tocen.interceptor";
import { LocationService } from "./shared/services/location.service";
import { OrderService } from "./shared/services/order.service";
import { ModuleApiService } from "./order-page/order-page/form-blog/form-steps/step-model/module.api.service";
import { LoadingService } from "./shared/services/loading.service";
import { LoadingInterceptor } from "./interceptors/loading.interceptor";

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
    ModuleApiService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
