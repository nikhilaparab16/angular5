import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GetDataService } from './get-data.service';
import { HttpModule,Response } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeatureComponent } from './feature/feature.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    MenuComponent,
    FooterComponent,
    SidebarComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
