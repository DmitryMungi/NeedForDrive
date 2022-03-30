import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StartPageComponent } from "./start-page/start-page/start-page.component";

const routes: Routes = [
  {
    path: "",
    component: StartPageComponent,
  },
  {
    path: "order",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./order-page/order-page.module").then(
            (mod) => mod.OrderPageModule
          ),
        data: { title: "Страница заказа" },
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
