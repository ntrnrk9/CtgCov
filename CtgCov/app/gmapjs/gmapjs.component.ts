import { Component } from '@angular/core';
declare var google: any;
declare var MarkerClusterer: any;
@Component({
    selector: 'gmapjs',
    templateUrl: 'gmapjs.component.html',
    styleUrls: ['gmapjs.component.css'],
    moduleId: module.id
})
export class GmapjsComponent {
    private name = 'GmapjsComponent';
    US_CENTER_LAT_LNG = { lat: 36.090240, lng: -95.712891 };
    markers: any = [];

    constructor() { }
    ngOnInit() {
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

        var markerCluster = new MarkerClusterer(map, this.markers,
            { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    }
}

// This code copy to app.module.ts

