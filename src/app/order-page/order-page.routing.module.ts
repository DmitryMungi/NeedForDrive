import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StepAdditComponent } from "./order-page/form-blog/form-steps/step-addit/step-addit.component";
import { StepConfirmComponent } from "./order-page/form-blog/form-steps/step-confirm/step-confirm.component";
import { StepFinalComponent } from "./order-page/form-blog/form-steps/step-final/step-final.component";
import { StepLocationComponent } from "./order-page/form-blog/form-steps/step-location/step-location.component";
import { StepModelComponent } from "./order-page/form-blog/form-steps/step-model/step-model.component";
import { OrderPageComponent } from "./order-page/order-page.component";

const stepsRoutes: Routes = [
  {
    path: "step-1",
    component: StepLocationComponent,
  },
  {
    path: "step-2",
    component: StepModelComponent,
  },
  {
    path: "step-3",
    component: StepAdditComponent,
  },
  {
    path: "step-4",
    component: StepConfirmComponent,
  },
  {
    path: "step-5",
    component: StepFinalComponent,
  },
];

const routes: Routes = [
  {
    path: "",
    component: OrderPageComponent,
    children: stepsRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPageRoutingModule {}
