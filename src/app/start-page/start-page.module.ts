import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page/start-page.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { LocationComponent } from './location/location.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonModule } from '../button/button.module';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    StartPageComponent,
    MainComponent,
    HeaderComponent,
    LocationComponent,
    FooterComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ButtonModule
  ],
  exports: [
    StartPageComponent
  ]
})
export class StartPageModule { }
