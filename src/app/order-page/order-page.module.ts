import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularYandexMapsModule, YaConfig } from "angular8-yandex-maps";
import { OrderPageComponent } from "./order-page/order-page.component";
import { OrderPageRoutingModule } from "./order-page.routing.module";
import { StartPageModule } from "../start-page/start-page.module";
import { OrderFormComponent } from "./order-page/form-blog/order-form.component";
import { ButtonModule } from "../button/button.module";
import { StepLocationComponent } from "./order-page/form-blog/form-steps/step-location/step-location.component";
import { StepModelComponent } from "./order-page/form-blog/form-steps/step-model/step-model.component";
import { StepAdditComponent } from "./order-page/form-blog/form-steps/step-addit/step-addit.component";
import { StepConfirmComponent } from "./order-page/form-blog/form-steps/step-confirm/step-confirm.component";
import { StepFinalComponent } from "./order-page/form-blog/form-steps/step-final/step-final.component";
import { OrderInfoComponent } from "./order-page/form-blog/order-info/order-info.component";
import { InputModule } from "../input/input.module";
import { environment } from "../../environments/environment";
import { LoaderComponent } from "./shared-components/loader/loader.component";

const mapConfig: YaConfig = {
  apikey: environment.apiKeyMap,
  lang: "ru_RU",
};

@NgModule({
  declarations: [
    OrderPageComponent,
    OrderFormComponent,
    StepLocationComponent,
    StepModelComponent,
    StepAdditComponent,
    StepConfirmComponent,
    StepFinalComponent,
    OrderInfoComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    OrderPageRoutingModule,
    StartPageModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularYandexMapsModule.forRoot(mapConfig),
    InputModule,
    HttpClientModule,
  ],
  exports: [FormsModule, ReactiveFormsModule],
})
export class OrderPageModule {}
