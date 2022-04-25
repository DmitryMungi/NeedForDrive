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
import { OrderInfoComponent } from "./order-page/form-blog/order-info/order-info.component";
import { InputModule } from "../input/input.module";
import { environment } from "../../environments/environment";
import { LoaderModule } from "../shared/components/loader/loader.module";
import { DurationPipe } from "../pipes/duration.pipe";
import { GluingPipe } from "../pipes/gluing.pipe";
import { OrderItemComponent } from "./order-page/form-blog/order-info/order-item/order-item.component";
import { CompletedOrderComponent } from "./completed-order/completed-order.component";
import { ModalModule } from "../shared/components/modal/modal.module";

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
    OrderInfoComponent,
    DurationPipe,
    GluingPipe,
    OrderItemComponent,
    CompletedOrderComponent,
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
    LoaderModule,
    ModalModule,
  ],
  exports: [FormsModule, ReactiveFormsModule],
})
export class OrderPageModule {}
