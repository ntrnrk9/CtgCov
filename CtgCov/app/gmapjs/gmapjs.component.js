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
        this.state = "Sydney, NSW";
        this.geocoder = null;
        this.citymap = [
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
        this.address = "United States";
        this.boundList = [{ "state": "Alaska", "bounds": { "south": 51.175092, "west": 172.34784609999997, "north": 71.441059, "east": -129.97951090000004 }, "code": "AK" }, { "state": "Alabama", "bounds": { "south": 30.144425, "west": -88.47322689999999, "north": 35.008028, "east": -84.88824599999998 }, "code": "AL" }, { "state": "Arkansas", "bounds": { "south": 33.0041059, "west": -94.61791900000003, "north": 36.4997491, "east": -89.64483790000003 }, "code": "AR" }, { "state": "California", "bounds": { "south": 32.528832, "west": -124.48200300000002, "north": 42.0095169, "east": -114.13121100000001 }, "code": "CA" }, { "state": "Arizona", "bounds": { "south": 31.3321771, "west": -114.8165909, "north": 37.0042599, "east": -109.04522309999999 }, "code": "AZ" }, { "state": "Colorado", "bounds": { "south": 36.992424, "west": -109.06025599999998, "north": 41.0034439, "east": -102.04087800000002 }, "code": "CO" }, { "state": "Connecticut", "bounds": { "south": 40.950943, "west": -73.72777500000001, "north": 42.050587, "east": -71.787239 }, "code": "CT" }, { "state": "Delaware", "bounds": { "south": 38.451018, "west": -75.78914789999999, "north": 39.8394839, "east": -74.98416499999996 }, "code": "DE" }, { "state": "Georgia", "bounds": { "south": 30.3555908, "west": -85.60516489999998, "north": 35.0006589, "east": -80.75142900000003 }, "code": "GA" }, { "state": "Florida", "bounds": { "south": 24.396308, "west": -87.63489600000003, "north": 31.000968, "east": -79.97430600000001 }, "code": "FL" }, { "state": "Idaho", "bounds": { "south": 41.9880051, "west": -117.24302699999998, "north": 49.0011461, "east": -111.04349500000001 }, "code": "ID" }, { "state": "Iowa", "bounds": { "south": 40.375437, "west": -96.63953500000002, "north": 43.5011961, "east": -90.14006089999998 }, "code": "IA" }, { "state": "Washington", "bounds": { "south": 38.7916449, "west": -77.11975899999999, "north": 38.995548, "east": -76.90939300000002 }, "code": "Washington" }, { "state": "Illinois", "bounds": { "south": 36.970298, "west": -91.51307889999998, "north": 42.5083379, "east": -87.01993499999998 }, "code": "IL" }, { "state": "Kansas", "bounds": { "south": 36.9930159, "west": -102.05176879999999, "north": 40.0045419, "east": -94.58838700000001 }, "code": "KS" }, { "state": "Louisiana", "bounds": { "south": 28.8551271, "west": -94.04335200000003, "north": 33.019544, "east": -88.75838799999997 }, "code": "LA" }, { "state": "Maine", "bounds": { "south": 42.91712589999999, "west": -71.08433409999998, "north": 47.459686, "east": -66.8850751 }, "code": "ME" }, { "state": "Mississippi", "bounds": { "south": 30.146096, "west": -91.65500889999998, "north": 34.9961091, "east": -88.09788800000001 }, "code": "MS" }, { "state": "Minnesota", "bounds": { "south": 43.499361, "west": -97.2391958, "north": 49.384358, "east": -89.48338509999996 }, "code": "MN" }, { "state": "North Carolina", "bounds": { "south": 33.7528778, "west": -84.32186899999999, "north": 36.5881568, "east": -75.40011900000002 }, "code": "NC" }, { "state": "Nebraska", "bounds": { "south": 39.999932, "west": -104.053514, "north": 43.00170689999999, "east": -95.30829 }, "code": "NE" }, { "state": "New Mexico", "bounds": { "south": 31.332172, "west": -109.05017299999997, "north": 37.0002931, "east": -103.00196399999999 }, "code": "NM" }, { "state": "New York", "bounds": { "south": 40.4773991, "west": -74.25908989999999, "north": 40.9175771, "east": -73.7002721 }, "code": "New York" }, { "state": "Oklahoma", "bounds": { "south": 33.615787, "west": -103.002455, "north": 37.0023119, "east": -94.43066199999998 }, "code": "OK" }, { "state": "South Carolina", "bounds": { "south": 32.033454, "west": -83.353928, "north": 35.2155401, "east": -78.49930089999998 }, "code": "SC" }, { "state": "Pennsylvania", "bounds": { "south": 39.7197989, "west": -80.51989500000002, "north": 42.516072, "east": -74.68950180000002 }, "code": "PA" }, { "state": "Texas", "bounds": { "south": 25.8371638, "west": -106.64564610000002, "north": 36.5007041, "east": -93.50803889999997 }, "code": "TX" }, { "state": "Virginia", "bounds": { "south": 36.5407589, "west": -83.67541499999999, "north": 39.466012, "east": -75.16643490000001 }, "code": "VA" }, { "state": "Washington", "bounds": { "south": 45.543541, "west": -124.848974, "north": 49.0024305, "east": -116.91557999999998 }, "code": "WA" }, { "state": "Wyoming", "bounds": { "south": 40.994746, "west": -111.05688900000001, "north": 45.005904, "east": -104.0522449 }, "code": "WY" }];
    }
    GmapjsComponent.prototype.ngOnInit = function () {
        this.geocoder = new google.maps.Geocoder();
        var bounds = new google.maps.LatLngBounds();
        var mapProp = {
            center: new google.maps.LatLng(36.090240, -95.712891),
            zoom: 4,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: true,
            panControl: true,
            zoomControl: true,
            mapTypeControlOptions: { style: google.maps.MapTypeControlStyle.DROPDOWN_MENU },
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true,
            rotateControl: true,
            navigationControl: true
        };
        this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        var myCenter = new google.maps.LatLng(36.090240, -95.712891);
        var marker = new google.maps.Marker({ position: myCenter });
        for (var i = 0; i < this.citymap.length; i++) {
            var position = new google.maps.LatLng(this.citymap[i].center.lat, this.citymap[i].center.lng);
            bounds.extend(position);
            marker = new google.maps.Marker({
                position: position,
                icon: this.citymap[i].icon
            });
            this.markers.push(marker);
        }
        var markerCluster = new MarkerClusterer(this.map, this.markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
        //this.findAddress(this.address);
    };
    GmapjsComponent.prototype.geocodeAddress = function () {
        //alert(this.state);
        var ctrl = this;
        var geocoder = this.geocoder;
        var resultsMap = this.map;
        var address = this.state;
        var bound = this.boundList;
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status === 'OK') {
                var markerBounds = new google.maps.LatLngBounds();
                resultsMap.setCenter(results[0].geometry.location);
                markerBounds.extend(results[0].geometry.location);
                var state = (results[0].address_components[0].long_name);
                var code = (results[0].address_components[0].short_name);
                var bounds = (results[0].geometry.bounds);
                bound.push({ state: state, bounds: bounds, code: code });
                resultsMap.fitBounds(results[0].geometry.viewport);
                resultsMap.setZoom(6);
                this.map = resultsMap;
                //ctrl.test(results[0].geometry.bounds);
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    GmapjsComponent.prototype.test = function () {
        var bounds = { "south": 32.528832, "west": -124.48200300000002, "north": 42.0095169, "east": -114.13121100000001 };
        for (var i = 0; i < this.citymap.length; i++) {
            var result = this.contains(bounds, this.citymap[i].center.lat, this.citymap[i].center.lng);
            console.log("result: " + result);
        }
    };
    GmapjsComponent.prototype.contains = function (bound, lat, lng) {
        //let inBox = lat <= bound.north && lat >= bound.south && lng <= bound.west && lng >= bound.east;
        var currentLocation = new google.maps.LatLng(lat, lng);
        var view = google.maps.LatLngBounds({ lat: bound.south, lng: bound.west }, { lat: bound.north, lng: bound.east });
        //var res = google.maps.LatLngBounds({ lat: bound.south, lng: bound.west }, { lat: bound.north, lng: bound.east }).contains(currentLocation);
        var imageBounds = new google.maps.LatLngBounds(new google.maps.LatLng(bound.south, bound.west), //sw
        new google.maps.LatLng(bound.north, bound.east) //ne
        );
        var one = imageBounds.contains(currentLocation);
        //let inBox = view.contains(currentLocation);
        //console.log(res+" "+inBox+" "+one);
        console.log(one);
        return one;
    };
    return GmapjsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], GmapjsComponent.prototype, "state", void 0);
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