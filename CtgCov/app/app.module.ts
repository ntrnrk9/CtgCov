import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainTabsComponent } from './mainTabs/mainTabs.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, FooterComponent, HeaderComponent, MainTabsComponent, HomePageComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
