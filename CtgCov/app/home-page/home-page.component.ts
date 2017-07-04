import { Component } from '@angular/core';

@Component({
    selector: 'home-page',
    templateUrl: 'home-page.component.html',
    styleUrls: [ 'home-page.component.css'],
    moduleId: module.id
})
export class HomePageComponent {
    private name = 'HomePageComponent';
    selectedState: any = "alabama";
}

// This code copy to app.module.ts
