import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { IpAddressComponent } from './components/ip-address/ip-address.component';
import { GeneralLocationInformationComponent } from './components/general-location-information/general-location-information.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    IpAddressComponent,
    GeneralLocationInformationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
