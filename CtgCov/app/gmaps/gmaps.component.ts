import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'gmaps',
    templateUrl: 'gmaps.component.html',
    styleUrls: [ 'gmaps.component.css'],
    moduleId: module.id
})
export class GmapsComponent {
    private name = 'GmapsComponent';
    title: string = 'My first angular2-google-maps project';
    lat: number = 36.090240;
    lng: number = -95.712891;
    US_CENTER_LAT_LNG = { lat: 36.090240, lng: -95.712891 };

    zoom: number = 4;
    citymap = [
        {
            center: { lat: 41.878, lng: -87.629 },
            population: 2714856
        },
        {
            center: { lat: 40.714, lng: -74.005 },
            population: 8405837
        },
        {
            center: { lat: 34.052, lng: -118.243 },
            population: 3857799
        },
        {
            center: { lat: 49.25, lng: -123.1 },
            population: 603502
        }
    ];
    constructor() { }

    ngOnInit() {
    }

}

// This code copy to app.module.ts
