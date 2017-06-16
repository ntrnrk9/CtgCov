import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainTabsComponent } from './mainTabs/mainTabs.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GmapsComponent } from './gmaps/gmaps.component';

@NgModule({
    imports: [BrowserModule, HttpModule, CommonModule, FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAafsMtGWbhgmfXU1TV-K-VUh8y1d8jZjI'
        })],
    declarations: [AppComponent, FooterComponent, HeaderComponent, MainTabsComponent, HomePageComponent, GmapsComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
