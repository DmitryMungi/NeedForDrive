import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { OrderPageComponent } from "./order-page/order-page.component";
import { OrderPageRoutingModule } from "./order-page.routing.module";
import { StartPageModule } from "../start-page/start-page.module";
import { FormBlogComponent } from "./order-page/form-blog/form-blog.component";
import { ButtonModule } from "../button/button.module";
import { StepLocationComponent } from "./order-page/form-blog/form-steps/step-location/step-location.component";
import { StepModelComponent } from "./order-page/form-blog/form-steps/step-model/step-model.component";
import { StepAdditComponent } from "./order-page/form-blog/form-steps/step-addit/step-addit.component";
import { StepConfirmComponent } from "./order-page/form-blog/form-steps/step-confirm/step-confirm.component";
import { StepFinalComponent } from "./order-page/form-blog/form-steps/step-final/step-final.component";

@NgModule({
  declarations: [
    OrderPageComponent,
    FormBlogComponent,
    StepLocationComponent,
    StepModelComponent,
    StepAdditComponent,
    StepConfirmComponent,
    StepFinalComponent,
  ],
  imports: [
    CommonModule,
    OrderPageRoutingModule,
    StartPageModule,
    ButtonModule,
    FormsModule,
  ],
})
export class OrderPageModule {}
