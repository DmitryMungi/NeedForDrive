import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { StartPageComponent } from "./start-page/start-page.component";
import { MainComponent } from "./main/main.component";
import { HeaderComponent } from "./header/header.component";
import { LocationComponent } from "./location/location.component";
import { FooterComponent } from "./footer/footer.component";
import { ButtonModule } from "../button/button.module";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { CarouselModule } from "../carousel/carousel.module";
import { SelectLangComponent } from "./select-lang/select-lang.component";
import { StartPageRoutingModule } from "./start-page.routing.module";

@NgModule({
  declarations: [
    StartPageComponent,
    MainComponent,
    HeaderComponent,
    LocationComponent,
    FooterComponent,
    SideBarComponent,
    SelectLangComponent,
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    ButtonModule,
    CarouselModule,
    StartPageRoutingModule,
  ],
  exports: [
    StartPageComponent,
    HeaderComponent,
    LocationComponent,
    SideBarComponent,
    SelectLangComponent,
  ],
})
export class StartPageModule {}
