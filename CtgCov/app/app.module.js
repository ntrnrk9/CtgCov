"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var core_2 = require("@agm/core");
var footer_component_1 = require("./footer/footer.component");
var header_component_1 = require("./header/header.component");
var mainTabs_component_1 = require("./mainTabs/mainTabs.component");
var home_page_component_1 = require("./home-page/home-page.component");
var gmaps_component_1 = require("./gmaps/gmaps.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, common_1.CommonModule, forms_1.FormsModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyAafsMtGWbhgmfXU1TV-K-VUh8y1d8jZjI'
            })],
        declarations: [app_component_1.AppComponent, footer_component_1.FooterComponent, header_component_1.HeaderComponent, mainTabs_component_1.MainTabsComponent, home_page_component_1.HomePageComponent, gmaps_component_1.GmapsComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map