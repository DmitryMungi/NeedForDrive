import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompletedOrderComponent } from "./completed-order/completed-order.component";
import { OrderPageComponent } from "./order-page/order-page.component";

const routes: Routes = [
  {
    path: "",
    component: OrderPageComponent,
  },
  {
    path: "completed/:id",
    component: CompletedOrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPageRoutingModule {}
