import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from './button/button.module';
import { StartPageModule } from './start-page/start-page.module';
// import { CarouselModule } from './carousel/carousel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StartPageModule,
    ButtonModule,
    // CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }