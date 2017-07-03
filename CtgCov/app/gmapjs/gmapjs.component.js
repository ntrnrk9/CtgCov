"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GmapjsComponent = (function () {
    function GmapjsComponent() {
        this.name = 'GmapjsComponent';
        this.US_CENTER_LAT_LNG = { lat: 36.090240, lng: -95.712891 };
        this.markers = [];
    }
    GmapjsComponent.prototype.ngOnInit = function () {
        var bounds = new google.maps.LatLngBounds();
        var mapProp = {
            center: new google.maps.LatLng(36.090240, -95.712891),
            zoom: 4,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        var myCenter = new google.maps.LatLng(36.090240, -95.712891);
        var marker = new google.maps.Marker({ position: myCenter });
        var citymap = [
            {
                center: { lat: 41.878, lng: -87.629 },
                population: 2714856,
                icon: '../../assets/images/markers/trailer-blue.png',
                title: 'AAA',
                label: 'A'
            },
            {
                center: { lat: 40.714, lng: -74.005 },
                population: 8405837,
                icon: '../../assets/images/markers/trailer-blue.png',
                title: 'BBBB',
                label: 'B'
            },
            {
                center: { lat: 34.052, lng: -118.243 },
                population: 3857799,
                icon: '../../assets/images/markers/trailer-blue.png',
                title: '<h4>CCCCC</h4',
                label: 'C'
            },
            {
                center: { lat: 49.25, lng: -123.1 },
                population: 603502,
                icon: '../../assets/images/markers/trailer-blue.png',
                title: 'DDDD',
                label: 'D'
            }
        ];
        for (var i = 0; i < citymap.length; i++) {
            var position = new google.maps.LatLng(citymap[i].center.lat, citymap[i].center.lng);
            bounds.extend(position);
            marker = new google.maps.Marker({
                position: position
            });
            this.markers.push(marker);
        }
        var markerCluster = new MarkerClusterer(map, this.markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    };
    return GmapjsComponent;
}());
GmapjsComponent = __decorate([
    core_1.Component({
        selector: 'gmapjs',
        templateUrl: 'gmapjs.component.html',
        styleUrls: ['gmapjs.component.css'],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [])
], GmapjsComponent);
exports.GmapjsComponent = GmapjsComponent;
// This code copy to app.module.ts
//# sourceMappingURL=gmapjs.component.js.map