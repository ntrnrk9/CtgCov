import { Component, Input } from '@angular/core';
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
    @Input() state: any = "Sydney, NSW";
    constructor() { }

    map: any;
    geocoder: any = null;
    selectedState: any;

    ngOnInit() {
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
                position: position,
                icon: citymap[i].icon
            });

            this.markers.push(marker);
        }

        var markerCluster = new MarkerClusterer(this.map, this.markers,
            { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
        //this.findAddress(this.address);
    }
    address = "United States";

    geocodeAddress() {
        alert(this.state);
        var geocoder = this.geocoder;
        var resultsMap = this.map;
        var address = this.state;
        geocoder.geocode({ 'address': address }, function (results:any, status:any) {
            if (status === 'OK') {
                var markerBounds = new google.maps.LatLngBounds();
                resultsMap.setCenter(results[0].geometry.location);
                markerBounds.extend(results[0].geometry.location);
                console.log(results[0]);
                resultsMap.fitBounds(results[0].geometry.viewport);
                resultsMap.setZoom(6);
                this.map = resultsMap;
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

}

// This code copy to app.module.ts

