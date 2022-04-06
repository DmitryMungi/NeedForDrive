import { NgModule } from "@angular/core";
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

const mapConfig: YaConfig = {
  apikey: "fa1fe0ab-37b7-4d26-a68c-7372986f7de9",
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
  ],
  imports: [
    CommonModule,
    OrderPageRoutingModule,
    StartPageModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularYandexMapsModule,
    InputModule,
  ],
  exports: [FormsModule, ReactiveFormsModule],
})
export class OrderPageModule {}
