import { Component } from '@angular/core';
import { FilterCPipe } from '../Filters/filterC.pipe';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'pool1-mang-page',
    templateUrl: 'pool1-mang-page.component.html',
    styleUrls: ['pool1-mang-page.component.css'],
    moduleId: module.id,
    //pipes: [FilterCPipe]
})
export class Pool1MangPageComponent {
    rowLimit: any = 4;
    pageNumber: any = 0;
    lLimit: any = this.pageNumber * 4;
    uLimit: any = (this.pageNumber+1) * 4;
    selectedCompany: any = "Select a company";
    selectedState: any = "Select a state";
    selectedCity: any = "Select a city";
    updateReqPool: any;
    selectedCsr: any = "Select a Csr";
    selectedPlanner: any = "Select a planner";
    allCsr: any;
    //[name: string]: any;
    allPlanners: any = [];
    private name = 'Pool1Mang-pageComponent';
    cityFil: String = "";
    stateFil: String = "";
    ccFil: String = "";
    selectedVarience: Number = 1;
    data: any[] = [];
    pageNum: Number = 1;
    countryList: any = ["AL", "AZ", "AR"];
    cityList: any = ["Birmingham", "Cullman", "Gentry", "North Little Rock", "Phoenix"];
    ccList: any = ["Averitt", "Serta", "Walmart 6008", "Valspar"];
    allCities: any = [{ "cityName": "Cayuga", "cityState": "WI", "cityZip": "54546", "cityCountry": 3, "cityRegion": "UPMID", "cityLatitude": "46.24000", "cityLongtitude": "90.68000" }, { "cityName": "Cazenovia", "cityState": "WI", "cityZip": "53924", "cityCountry": 3, "cityRegion": "UPMID", "cityLatitude": "43.52000", "cityLongtitude": "90.20000" }];
    allStates: any = [{ "stateName": "Alberta", "stateCode": "AB", "countryId": 1 }, { "stateName": "British Columbia", "stateCode": "BC", "countryId": 1 }, { "stateName": "Manitoba", "stateCode": "MB", "countryId": 1 }, { "stateName": "New Brunswick", "stateCode": "NB", "countryId": 1 }, { "stateName": "Newfoundland", "stateCode": "NL", "countryId": 1 }, { "stateName": "Nova Scotia", "stateCode": "NS", "countryId": 1 }, { "stateName": "Northwest Territories", "stateCode": "NT", "countryId": 1 }, { "stateName": "Nunavut", "stateCode": "NU", "countryId": 1 }, { "stateName": "Ontario", "stateCode": "ON", "countryId": 1 }, { "stateName": "Prince Edward Island", "stateCode": "PE", "countryId": 1 }, { "stateName": "Quebec", "stateCode": "QC", "countryId": 1 }, { "stateName": "Saskatchewan", "stateCode": "SK", "countryId": 1 }, { "stateName": "Yukon Territory", "stateCode": "YT", "countryId": 1 }, { "stateName": "Aquascalientes", "stateCode": "AG", "countryId": 2 }, { "stateName": "Baja California-N", "stateCode": "BJ", "countryId": 2 }, { "stateName": "Baja California-S", "stateCode": "BS", "countryId": 2 }, { "stateName": "Chiapas", "stateCode": "CH", "countryId": 2 }, { "stateName": "Chihuahua", "stateCode": "CI", "countryId": 2 }, { "stateName": "Colioma", "stateCode": "CL", "countryId": 2 }, { "stateName": "Campeche", "stateCode": "CP", "countryId": 2 }, { "stateName": "Coahuila Zargoza", "stateCode": "CU", "countryId": 2 }, { "stateName": "Distrito Federal", "stateCode": "DF", "countryId": 2 }, { "stateName": "Durango", "stateCode": "DG", "countryId": 2 }, { "stateName": "Estado", "stateCode": "EM", "countryId": 2 }, { "stateName": "Guanajuato", "stateCode": "GJ", "countryId": 2 }, { "stateName": "Guerrero", "stateCode": "GR", "countryId": 2 }, { "stateName": "Hidalgo", "stateCode": "HG", "countryId": 2 }, { "stateName": "Jalisco", "stateCode": "JA", "countryId": 2 }, { "stateName": "Michoacan de O", "stateCode": "MH", "countryId": 2 }, { "stateName": "Morelos", "stateCode": "MR", "countryId": 2 }, { "stateName": "Mexico", "stateCode": "MX", "countryId": 2 }, { "stateName": "Nayarit", "stateCode": "NA", "countryId": 2 }, { "stateName": "Nuevo Leon", "stateCode": "NX", "countryId": 2 }, { "stateName": "Oaxaca", "stateCode": "OA", "countryId": 2 }, { "stateName": "Puebla", "stateCode": "PU", "countryId": 2 }, { "stateName": "Querataro de A", "stateCode": "QA", "countryId": 2 }, { "stateName": "Quintana Roo", "stateCode": "QR", "countryId": 2 }, { "stateName": "Sinaloa", "stateCode": "SI", "countryId": 2 }, { "stateName": "San Luis Potosi", "stateCode": "SL", "countryId": 2 }, { "stateName": "Sonora", "stateCode": "SO", "countryId": 2 }, { "stateName": "Tabasco", "stateCode": "TA", "countryId": 2 }, { "stateName": "Tlaxcala", "stateCode": "TL", "countryId": 2 }, { "stateName": "Tamaulipas", "stateCode": "TM", "countryId": 2 }, { "stateName": "Veracruz-Llave", "stateCode": "VZ", "countryId": 2 }, { "stateName": "Yucatan", "stateCode": "YC", "countryId": 2 }, { "stateName": "Zacatecas", "stateCode": "ZT", "countryId": 2 }, { "stateName": "Alaska", "stateCode": "AK", "countryId": 3 }, { "stateName": "Alabama", "stateCode": "AL", "countryId": 3 }, { "stateName": "Arkansas", "stateCode": "AR", "countryId": 3 }, { "stateName": "Arizona", "stateCode": "AZ", "countryId": 3 }, { "stateName": "California", "stateCode": "CA", "countryId": 3 }, { "stateName": "Colorado", "stateCode": "CO", "countryId": 3 }, { "stateName": "Connecticut", "stateCode": "CT", "countryId": 3 }, { "stateName": "District of Columbia", "stateCode": "DC", "countryId": 3 }, { "stateName": "Delaware", "stateCode": "DE", "countryId": 3 }, { "stateName": "Florida", "stateCode": "FL", "countryId": 3 }, { "stateName": "Georgia", "stateCode": "GA", "countryId": 3 }, { "stateName": "Hawaii", "stateCode": "HA", "countryId": 3 }, { "stateName": "Iowa", "stateCode": "IA", "countryId": 3 }, { "stateName": "Idaho", "stateCode": "ID", "countryId": 3 }, { "stateName": "Illinois", "stateCode": "IL", "countryId": 3 }, { "stateName": "Indiana", "stateCode": "IN", "countryId": 3 }, { "stateName": "Kansas", "stateCode": "KS", "countryId": 3 }, { "stateName": "Kentucky", "stateCode": "KY", "countryId": 3 }, { "stateName": "Louisiana", "stateCode": "LA", "countryId": 3 }, { "stateName": "Massachusetts", "stateCode": "MA", "countryId": 3 }, { "stateName": "Maryland", "stateCode": "MD", "countryId": 3 }, { "stateName": "Maine", "stateCode": "ME", "countryId": 3 }, { "stateName": "Michigan", "stateCode": "MI", "countryId": 3 }, { "stateName": "Minnesota", "stateCode": "MN", "countryId": 3 }, { "stateName": "Missouri", "stateCode": "MO", "countryId": 3 }, { "stateName": "Mississippi", "stateCode": "MS", "countryId": 3 }, { "stateName": "Montana", "stateCode": "MT", "countryId": 3 }, { "stateName": "North Carolina", "stateCode": "NC", "countryId": 3 }, { "stateName": "North Dakota", "stateCode": "ND", "countryId": 3 }, { "stateName": "Nebraska", "stateCode": "NE", "countryId": 3 }, { "stateName": "New Hampshire", "stateCode": "NH", "countryId": 3 }, { "stateName": "New Jersey", "stateCode": "NJ", "countryId": 3 }, { "stateName": "New Mexico", "stateCode": "NM", "countryId": 2 }, { "stateName": "Nevada", "stateCode": "NV", "countryId": 3 }, { "stateName": "New York", "stateCode": "NY", "countryId": 3 }, { "stateName": "Ohio", "stateCode": "OH", "countryId": 3 }, { "stateName": "Oklahoma", "stateCode": "OK", "countryId": 3 }, { "stateName": "Oregon", "stateCode": "OR", "countryId": 3 }, { "stateName": "Pennsylvania", "stateCode": "PA", "countryId": 3 }, { "stateName": "Rhode Island", "stateCode": "RI", "countryId": 3 }, { "stateName": "South Carolina", "stateCode": "SC", "countryId": 3 }, { "stateName": "South Dakota", "stateCode": "SD", "countryId": 3 }, { "stateName": "Tennessee", "stateCode": "TN", "countryId": 3 }, { "stateName": "Texas", "stateCode": "TX", "countryId": 3 }, { "stateName": "Utah", "stateCode": "UT", "countryId": 3 }, { "stateName": "Virginia", "stateCode": "VA", "countryId": 3 }, { "stateName": "Vermont", "stateCode": "VT", "countryId": 3 }, { "stateName": "Washington", "stateCode": "WA", "countryId": 3 }, { "stateName": "Wisconsin", "stateCode": "WI", "countryId": 3 }, { "stateName": "West Virginia", "stateCode": "WV", "countryId": 3 }, { "stateName": "Wyoming", "stateCode": "WY", "countryId": 3 }];
    allCC: any = [];
    poolToEdit: any = {
        state: "",
        city: "",
        csr: "",
        planner: "",
        company: "",
        reqPool: "",
        curr: "",
        variance: 0,
        twm: "",
        totReq: "",
        toShow: true,
        pool: ""
    };
    selectVarience(value: Number) {
        this.data = [];
        console.log(this.selectedVarience);
        console.log(this.cityFil + " " + this.stateFil);
        this.selectedVarience = value;
        // ... do other stuff here ...
        for (var j of this.ob.groups) {
            if (value == 0) {
                if (j.variance == 0) {
                    j.toShow = true;
                    this.data.push(j);

                } else {
                    j.toShow = false;
                }
            } else if (value == 1) {
                if (j.variance > 0) {
                    j.toShow = true;
                    this.data.push(j);
                } else {
                    j.toShow = false;
                }
            } else if (value == -1) {
                j.toShow = true;
                this.data.push(j);
            }
        }
        this.resetPage();
    }

    private resetPage() {
        this.rowLimit = 4;
        this.pageNumber = 0;
        this.lLimit = this.pageNumber * 4;
        this.uLimit = (this.pageNumber + 1) * 4;
        if (this.data.length < this.uLimit) {
            this.uLimit = this.data.length;
        }
    }
    ob = {
        groups: [{
            state: "AL",
            city: "Birmingham",
            csr: "Mike",
            planner: "Mike",
            company: "Valspar",
            reqPool: "1",
            curr: "1",
            variance: 0,
            twm: "VALBIRG02",
            totReq: "1",
            toShow: true,
            pool: "WALBEN34"

        }, {
            state: "AL",
            city: "Birmingham",
            csr: "Kevin",
            planner: "DANNY",
            company: "Averitt",
            reqPool: "2",
            curr: "1",
            variance: 1,
            twm: "AVEBIR",
            totReq: "2",
            toShow: true,
            pool: "BROTYLI07"
        }, {
            state: "AL",
            city: "Cullman",
            csr: "Sarah",
            planner: "DANNY",
            company: "Serta",
            reqPool: "4",
            curr: "1",
            variance: 3,
            twm: "SERCUL02",
            totReq: "4",
            toShow: true,
            pool: "TOOCH98"
        }, {
            state: "AL",
            city: "Gentry",
            csr: "David",
            planner: "Molly",
            company: "Walmart 6008",
            reqPool: "6",
            curr: "2",
            variance: 4,
            twm: "MCK",
            totReq: "6",
            toShow: true,
            pool: "MARMAN06"
        }, {
            state: "AR",
            city: "North Little Rock",
            csr: "Mike",
            planner: "Mike",
            company: "Valspar",
            reqPool: "10",
            curr: "5",
            variance: 5,
            twm: "VALBIRG02",
            totReq: "10",
            toShow: true,
            pool: "FREGRA06"
        }, {
            state: "AZ",
            city: "Phoenix",
            csr: "Mike",
            planner: "Mike",
            company: "Valspar",
            reqPool: "13",
            curr: "1",
            variance: 12,
            twm: "VALBIRG02",
            totReq: "13",
            toShow: true,
            pool: "FORFORG6"
        }, {
            state: "AL",
            city: "Birmingham",
            csr: "Mike",
            planner: "Mike",
            company: "Valspar",
            reqPool: "11",
            curr: "2",
            variance: 9,
            twm: "VALBIRG02",
            totReq: "11",
            toShow: true,
            pool: "WALBEN34"
        }],
        column: ["State", "City", "TMW", "Company", "CSR", "Planner", "Req Pool", "Current", "Variance", "Action"]
    };
    private getAllCities() {
        //alert("hi");
        this.http.get("http://192.168.1.77:81/TrailersCheck.asmx/GetAllCities").map(res => res.json())
            .subscribe(
            (data) => { console.log("getAllCities data recieved"); this.allCities = data; }, //For Success Response
            err => { console.error(err) } //For Error Response
            );
    }
    private getAllStates() {
        //alert("hi");
        this.http.get("http://192.168.1.77:81/TrailersCheck.asmx/GetAllStates").map(res => res.json())
            .subscribe(
            (data) => { console.log("getAllStates data recieved"); this.allStates = data; }, //For Success Response
            err => { console.error(err) } //For Error Response
            );
    }
    private getAllCompany() {
        //alert("hi");
        this.http.get("http://192.168.1.77:81/TrailersCheck.asmx/GetAllCompanies").map(res => res.json())
            .subscribe(
            (data) => { console.log("getAllCompany data recieved"); this.allCC = data; }, //For Success Response
            err => { console.error(err) } //For Error Response
            );
    }

    private getAllCsr() {
        //alert("hi");
        this.http.get("http://192.168.1.77:81/TrailersCheck.asmx/GetAllCsr").map(res => res.json())
            .subscribe(
            (data) => { console.log("getAllCsr data recieved"); this.allCsr = data; }, //For Success Response
            err => { console.error(err) } //For Error Response
            );
    }

    private getAllPlanner() {
        //alert("hi");
        this.http.get("http://192.168.1.77:81/TrailersCheck.asmx/GetAllPlanners").map(res => res.json())
            .subscribe(
            (data) => { console.log("getAllPlanner data recieved"); this.allPlanners = data; }, //For Success Response
            err => { console.error(err) } //For Error Response
            );
    }

    constructor(private http: Http) {
        this.selectVarience(1);
        this.getAllCities();
        this.getAllStates();
        this.getAllCompany();
        this.getAllCsr();
        this.getAllPlanner();
    }



    private toEdit(index: any) {
        console.log(index);
        this.poolToEdit = this.ob.groups[index];
        this.selectedPlanner = this.poolToEdit.planner;
        this.selectedCsr = this.poolToEdit.csr;
        this.updateReqPool = this.poolToEdit.reqPool;
    }

    private updatePool() {
        this.poolToEdit.csr = this.selectedCsr;
        this.poolToEdit.planner = this.selectedPlanner;
        this.poolToEdit.reqPool = this.updateReqPool;
    }

    selectCompany(item: any) {
        console.log(item);
        this.selectedCompany = item;
    }

    selectPlanner(item: any) {
        console.log(item);
        this.selectedPlanner = item;
    }
    selectCsr(item: any) {
        console.log(item);
        this.selectedCsr = item;
    }

    private nextPage() {
        console.log("nextPage");
        this.pageNumber += 1;
        this.lLimit = this.pageNumber * 4;
        this.uLimit = (this.pageNumber + 1) * 4;
        if (this.uLimit>this.data.length) {
            this.uLimit = this.data.length;
        }
        console.log("nextPage " + this.uLimit);
    }

    private prevPage() {
        this.pageNumber -= 1;
        console.log("prevPage");
        this.lLimit= this.pageNumber * 4;
        this.uLimit = (this.pageNumber + 1) * 4;
        if (this.lLimit <= 0) {
            this.lLimit = 0;
        }
    }
    
    add() {
        //alert("a");
        var ele = {
            state: "",
            city: "",
            csr: "",
            planner: "",
            company: "",
            reqPool: "",
            curr: "",
            variance: 0,
            twm: "",
            totReq: "",
            toShow: true,
            pool: ""
        };
        console.log("add: " + this.selectedState);
        console.log("add: " + this.selectedCity);
        //this.ob.groups.push(ele);
    }

    

    

}

// This code copy to app.module.ts
