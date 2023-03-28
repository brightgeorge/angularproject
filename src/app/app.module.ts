import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IndexpageComponent } from './indexpage/indexpage.component';
import { NavbarComponent } from './indexpage/navbar/navbar.component';
import { SlideshowComponent } from './indexpage/slideshow/slideshow.component';
import { TrendingComponent } from './indexpage/trending/trending.component';
import { SmartphoneComponent } from './indexpage/smartphone/smartphone.component';
import { SmarttvComponent } from './indexpage/smarttv/smarttv.component';
import { SmartlaptopComponent } from './indexpage/smartlaptop/smartlaptop.component';
import { SmartaccessoriesComponent } from './indexpage/smartaccessories/smartaccessories.component';
import { FooterComponent } from './footer/footer.component';
import { MobilephoneComponent } from './mobilephone/mobilephone.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexpageComponent,
    NavbarComponent,
    SlideshowComponent,
    TrendingComponent,
    SmartphoneComponent,
    SmarttvComponent,
    SmartlaptopComponent,
    SmartaccessoriesComponent,
    FooterComponent,
    MobilephoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
