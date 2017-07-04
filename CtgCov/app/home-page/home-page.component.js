"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomePageComponent = (function () {
    function HomePageComponent() {
        this.name = 'HomePageComponent';
        this.selectedState = "alabama";
    }
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    core_1.Component({
        selector: 'home-page',
        templateUrl: 'home-page.component.html',
        styleUrls: ['home-page.component.css'],
        moduleId: module.id
    })
], HomePageComponent);
exports.HomePageComponent = HomePageComponent;
// This code copy to app.module.ts
//# sourceMappingURL=home-page.component.js.map