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
import { YardMangPageComponent } from './yard-mang-page/yard-mang-page.component';
import { TableComponent } from './table/table.component';
import { PoolMangPageComponent } from './pool-mang-page/pool-mang-page.component';
import { AllocationPageComponent } from './allocation-page/allocation-page.component';

@NgModule({
    imports: [BrowserModule, HttpModule, CommonModule, FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAafsMtGWbhgmfXU1TV-K-VUh8y1d8jZjI'
        })],
    declarations: [AppComponent, FooterComponent,
        HeaderComponent, MainTabsComponent,
        HomePageComponent, GmapsComponent,
        YardMangPageComponent, TableComponent, AllocationPageComponent, PoolMangPageComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
