import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CompletedApiService } from "./completed.api.service";
import { UntilDestroy } from "@ngneat/until-destroy";
import { IOrderData } from "src/app/shared/interfaces/order.interface";

@UntilDestroy({ checkProperties: true })
@Component({
  selector: "app-completed-order",
  templateUrl: "./completed-order.component.html",
  styleUrls: ["./completed-order.component.less"],
})
export class CompletedOrderComponent implements OnInit {
  public id!: string;
  public completedRes!: IOrderData;
  public isConfirm: boolean = false;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private completedApi: CompletedApiService
  ) {
    this.id = activateRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.completedApi
      .getOrderComplet(this.id)
      .subscribe((res) => (this.completedRes = res));
  }

  confirmOrder() {
    this.isConfirm = true;
  }

  onConfirm() {
    this.router.navigate([`order/`]);
    this.completedApi.deleteOrder(this.id).subscribe((res) => console.log(res));
  }

  onGoBack() {
    this.isConfirm = false;
  }
}
