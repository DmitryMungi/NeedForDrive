import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderPageComponent } from "./order-page/order-page.component";
import { OrderPageRoutingModule } from "./order-page.routing.module";
import { StartPageModule } from "../start-page/start-page.module";

@NgModule({
  declarations: [OrderPageComponent],
  imports: [CommonModule, OrderPageRoutingModule, StartPageModule],
})
export class OrderPageModule {}
