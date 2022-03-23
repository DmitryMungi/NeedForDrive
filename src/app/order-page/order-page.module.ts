import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderPageComponent } from "./order-page/order-page.component";
import { OrderPageRoutingModule } from "./order-page.routing.module";
import { StartPageModule } from "../start-page/start-page.module";
import { FormBlogComponent } from "./order-page/form-blog/form-blog.component";
import { FormStepsComponent } from "./order-page/form-blog/form-steps/form-steps.component";

@NgModule({
  declarations: [OrderPageComponent, FormBlogComponent, FormStepsComponent],
  imports: [CommonModule, OrderPageRoutingModule, StartPageModule],
})
export class OrderPageModule {}
