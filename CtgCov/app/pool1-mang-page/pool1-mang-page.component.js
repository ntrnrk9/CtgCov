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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var Pool1MangPageComponent = (function () {
    function Pool1MangPageComponent(http) {
        this.http = http;
        this.rowLimit = 4;
        this.pageNumber = 0;
        this.lLimit = this.pageNumber * 4;
        this.uLimit = (this.pageNumber + 1) * 4;
        this.selectedCompany = "Select a company";
        this.selectedState = "Select a state";
        this.selectedCity = "Select a city";
        this.selectedCsr = "Select a Csr";
        this.selectedPlanner = "Select a planner";
        //[name: string]: any;
        this.allPlanners = [];
        this.name = 'Pool1Mang-pageComponent';
        this.cityFil = "";
        this.stateFil = "";
        this.ccFil = "";
        this.selectedVarience = 1;
        this.data = [];
        this.pageNum = 1;
        this.countryList = ["AL", "AZ", "AR"];
        this.cityList = ["Birmingham", "Cullman", "Gentry", "North Little Rock", "Phoenix"];
        this.ccList = ["Averitt", "Serta", "Walmart 6008", "Valspar"];
        this.allCities = [{ "cityName": "Cayuga", "cityState": "WI", "cityZip": "54546", "cityCountry": 3, "cityRegion": "UPMID", "cityLatitude": "46.24000", "cityLongtitude": "90.68000" }, { "cityName": "Cazenovia", "cityState": "WI", "cityZip": "53924", "cityCountry": 3, "cityRegion": "UPMID", "cityLatitude": "43.52000", "cityLongtitude": "90.20000" }];
        this.allStates = [{ "stateName": "Alberta", "stateCode": "AB", "countryId": 1 }, { "stateName": "British Columbia", "stateCode": "BC", "countryId": 1 }, { "stateName": "Manitoba", "stateCode": "MB", "countryId": 1 }, { "stateName": "New Brunswick", "stateCode": "NB", "countryId": 1 }, { "stateName": "Newfoundland", "stateCode": "NL", "countryId": 1 }, { "stateName": "Nova Scotia", "stateCode": "NS", "countryId": 1 }, { "stateName": "Northwest Territories", "stateCode": "NT", "countryId": 1 }, { "stateName": "Nunavut", "stateCode": "NU", "countryId": 1 }, { "stateName": "Ontario", "stateCode": "ON", "countryId": 1 }, { "stateName": "Prince Edward Island", "stateCode": "PE", "countryId": 1 }, { "stateName": "Quebec", "stateCode": "QC", "countryId": 1 }, { "stateName": "Saskatchewan", "stateCode": "SK", "countryId": 1 }, { "stateName": "Yukon Territory", "stateCode": "YT", "countryId": 1 }, { "stateName": "Aquascalientes", "stateCode": "AG", "countryId": 2 }, { "stateName": "Baja California-N", "stateCode": "BJ", "countryId": 2 }, { "stateName": "Baja California-S", "stateCode": "BS", "countryId": 2 }, { "stateName": "Chiapas", "stateCode": "CH", "countryId": 2 }, { "stateName": "Chihuahua", "stateCode": "CI", "countryId": 2 }, { "stateName": "Colioma", "stateCode": "CL", "countryId": 2 }, { "stateName": "Campeche", "stateCode": "CP", "countryId": 2 }, { "stateName": "Coahuila Zargoza", "stateCode": "CU", "countryId": 2 }, { "stateName": "Distrito Federal", "stateCode": "DF", "countryId": 2 }, { "stateName": "Durango", "stateCode": "DG", "countryId": 2 }, { "stateName": "Estado", "stateCode": "EM", "countryId": 2 }, { "stateName": "Guanajuato", "stateCode": "GJ", "countryId": 2 }, { "stateName": "Guerrero", "stateCode": "GR", "countryId": 2 }, { "stateName": "Hidalgo", "stateCode": "HG", "countryId": 2 }, { "stateName": "Jalisco", "stateCode": "JA", "countryId": 2 }, { "stateName": "Michoacan de O", "stateCode": "MH", "countryId": 2 }, { "stateName": "Morelos", "stateCode": "MR", "countryId": 2 }, { "stateName": "Mexico", "stateCode": "MX", "countryId": 2 }, { "stateName": "Nayarit", "stateCode": "NA", "countryId": 2 }, { "stateName": "Nuevo Leon", "stateCode": "NX", "countryId": 2 }, { "stateName": "Oaxaca", "stateCode": "OA", "countryId": 2 }, { "stateName": "Puebla", "stateCode": "PU", "countryId": 2 }, { "stateName": "Querataro de A", "stateCode": "QA", "countryId": 2 }, { "stateName": "Quintana Roo", "stateCode": "QR", "countryId": 2 }, { "stateName": "Sinaloa", "stateCode": "SI", "countryId": 2 }, { "stateName": "San Luis Potosi", "stateCode": "SL", "countryId": 2 }, { "stateName": "Sonora", "stateCode": "SO", "countryId": 2 }, { "stateName": "Tabasco", "stateCode": "TA", "countryId": 2 }, { "stateName": "Tlaxcala", "stateCode": "TL", "countryId": 2 }, { "stateName": "Tamaulipas", "stateCode": "TM", "countryId": 2 }, { "stateName": "Veracruz-Llave", "stateCode": "VZ", "countryId": 2 }, { "stateName": "Yucatan", "stateCode": "YC", "countryId": 2 }, { "stateName": "Zacatecas", "stateCode": "ZT", "countryId": 2 }, { "stateName": "Alaska", "stateCode": "AK", "countryId": 3 }, { "stateName": "Alabama", "stateCode": "AL", "countryId": 3 }, { "stateName": "Arkansas", "stateCode": "AR", "countryId": 3 }, { "stateName": "Arizona", "stateCode": "AZ", "countryId": 3 }, { "stateName": "California", "stateCode": "CA", "countryId": 3 }, { "stateName": "Colorado", "stateCode": "CO", "countryId": 3 }, { "stateName": "Connecticut", "stateCode": "CT", "countryId": 3 }, { "stateName": "District of Columbia", "stateCode": "DC", "countryId": 3 }, { "stateName": "Delaware", "stateCode": "DE", "countryId": 3 }, { "stateName": "Florida", "stateCode": "FL", "countryId": 3 }, { "stateName": "Georgia", "stateCode": "GA", "countryId": 3 }, { "stateName": "Hawaii", "stateCode": "HA", "countryId": 3 }, { "stateName": "Iowa", "stateCode": "IA", "countryId": 3 }, { "stateName": "Idaho", "stateCode": "ID", "countryId": 3 }, { "stateName": "Illinois", "stateCode": "IL", "countryId": 3 }, { "stateName": "Indiana", "stateCode": "IN", "countryId": 3 }, { "stateName": "Kansas", "stateCode": "KS", "countryId": 3 }, { "stateName": "Kentucky", "stateCode": "KY", "countryId": 3 }, { "stateName": "Louisiana", "stateCode": "LA", "countryId": 3 }, { "stateName": "Massachusetts", "stateCode": "MA", "countryId": 3 }, { "stateName": "Maryland", "stateCode": "MD", "countryId": 3 }, { "stateName": "Maine", "stateCode": "ME", "countryId": 3 }, { "stateName": "Michigan", "stateCode": "MI", "countryId": 3 }, { "stateName": "Minnesota", "stateCode": "MN", "countryId": 3 }, { "stateName": "Missouri", "stateCode": "MO", "countryId": 3 }, { "stateName": "Mississippi", "stateCode": "MS", "countryId": 3 }, { "stateName": "Montana", "stateCode": "MT", "countryId": 3 }, { "stateName": "North Carolina", "stateCode": "NC", "countryId": 3 }, { "stateName": "North Dakota", "stateCode": "ND", "countryId": 3 }, { "stateName": "Nebraska", "stateCode": "NE", "countryId": 3 }, { "stateName": "New Hampshire", "stateCode": "NH", "countryId": 3 }, { "stateName": "New Jersey", "stateCode": "NJ", "countryId": 3 }, { "stateName": "New Mexico", "stateCode": "NM", "countryId": 2 }, { "stateName": "Nevada", "stateCode": "NV", "countryId": 3 }, { "stateName": "New York", "stateCode": "NY", "countryId": 3 }, { "stateName": "Ohio", "stateCode": "OH", "countryId": 3 }, { "stateName": "Oklahoma", "stateCode": "OK", "countryId": 3 }, { "stateName": "Oregon", "stateCode": "OR", "countryId": 3 }, { "stateName": "Pennsylvania", "stateCode": "PA", "countryId": 3 }, { "stateName": "Rhode Island", "stateCode": "RI", "countryId": 3 }, { "stateName": "South Carolina", "stateCode": "SC", "countryId": 3 }, { "stateName": "South Dakota", "stateCode": "SD", "countryId": 3 }, { "stateName": "Tennessee", "stateCode": "TN", "countryId": 3 }, { "stateName": "Texas", "stateCode": "TX", "countryId": 3 }, { "stateName": "Utah", "stateCode": "UT", "countryId": 3 }, { "stateName": "Virginia", "stateCode": "VA", "countryId": 3 }, { "stateName": "Vermont", "stateCode": "VT", "countryId": 3 }, { "stateName": "Washington", "stateCode": "WA", "countryId": 3 }, { "stateName": "Wisconsin", "stateCode": "WI", "countryId": 3 }, { "stateName": "West Virginia", "stateCode": "WV", "countryId": 3 }, { "stateName": "Wyoming", "stateCode": "WY", "countryId": 3 }];
        this.allCC = [];
        this.poolToEdit = {
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
        this.choosenState = ["AZ", "AR"];
        this.ob = {
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
        this.selectVarience(1);
        this.getAllCities();
        this.getAllStates();
        this.getAllCompany();
        this.getAllCsr();
        this.getAllPlanner();
    }
    Pool1MangPageComponent.prototype.filterByState = function () {
        var temp = JSON.parse(JSON.stringify(this.data));
        for (var i = 0; i < temp.length; i++) {
            if (this.inArray(this.choosenState, temp[i].state)) {
            }
            else {
                temp.splice(i, 1);
                i--;
            }
        }
        this.data = JSON.parse(JSON.stringify(temp));
        this.resetPage();
    };
    Pool1MangPageComponent.prototype.inArray = function (items, value) {
        for (var i = 0; i < items.length; i++) {
            if (items[i] === value)
                return true;
        }
        return false;
    };
    Pool1MangPageComponent.prototype.selectVarience = function (value) {
        this.data = [];
        console.log(this.selectedVarience);
        console.log(this.cityFil + " " + this.stateFil);
        this.selectedVarience = value;
        // ... do other stuff here ...
        for (var _i = 0, _a = this.ob.groups; _i < _a.length; _i++) {
            var j = _a[_i];
            if (value == 0) {
                if (j.variance == 0) {
                    j.toShow = true;
                    this.data.push(j);
                }
                else {
                    j.toShow = false;
                }
            }
            else if (value == 1) {
                if (j.variance > 0) {
                    j.toShow = true;
                    this.data.push(j);
                }
                else {
                    j.toShow = false;
                }
            }
            else if (value == -1) {
                j.toShow = true;
                this.data.push(j);
            }
        }
        this.resetPage();
    };
    Pool1MangPageComponent.prototype.resetPage = function () {
        this.rowLimit = 4;
        this.pageNumber = 0;
        this.lLimit = this.pageNumber * 4;
        this.uLimit = (this.pageNumber + 1) * 4;
        if (this.data.length < this.uLimit) {
            this.uLimit = this.data.length;
        }
    };
    Pool1MangPageComponent.prototype.getAllCities = function () {
        var _this = this;
        //alert("hi");
        this.http.get("http://192.168.1.77:81/TrailersCheck.asmx/GetAllCities").map(function (res) { return res.json(); })
            .subscribe(function (data) { console.log("getAllCities data recieved"); _this.allCities = data; }, //For Success Response
        function (//For Success Response
            err) { console.error(err); } //For Error Response
        );
    };
    Pool1MangPageComponent.prototype.getAllStates = function () {
        var _this = this;
        //alert("hi");
        this.http.get("http://192.168.1.77:81/TrailersCheck.asmx/GetAllStates").map(function (res) { return res.json(); })
            .subscribe(function (data) { console.log("getAllStates data recieved"); _this.allStates = data; }, //For Success Response
        function (//For Success Response
            err) { console.error(err); } //For Error Response
        );
    };
    Pool1MangPageComponent.prototype.getAllCompany = function () {
        var _this = this;
        //alert("hi");
        this.http.get("http://192.168.1.77:81/TrailersCheck.asmx/GetAllCompanies").map(function (res) { return res.json(); })
            .subscribe(function (data) { console.log("getAllCompany data recieved"); _this.allCC = data; }, //For Success Response
        function (//For Success Response
            err) { console.error(err); } //For Error Response
        );
    };
    Pool1MangPageComponent.prototype.getAllCsr = function () {
        var _this = this;
        //alert("hi");
        this.http.get("http://192.168.1.77:81/TrailersCheck.asmx/GetAllCsr").map(function (res) { return res.json(); })
            .subscribe(function (data) { console.log("getAllCsr data recieved"); _this.allCsr = data; }, //For Success Response
        function (//For Success Response
            err) { console.error(err); } //For Error Response
        );
    };
    Pool1MangPageComponent.prototype.getAllPlanner = function () {
        var _this = this;
        //alert("hi");
        this.http.get("http://192.168.1.77:81/TrailersCheck.asmx/GetAllPlanners").map(function (res) { return res.json(); })
            .subscribe(function (data) { console.log("getAllPlanner data recieved"); _this.allPlanners = data; }, //For Success Response
        function (//For Success Response
            err) { console.error(err); } //For Error Response
        );
    };
    Pool1MangPageComponent.prototype.toEdit = function (index) {
        console.log(index);
        this.poolToEdit = this.ob.groups[index];
        this.selectedPlanner = this.poolToEdit.planner;
        this.selectedCsr = this.poolToEdit.csr;
        this.updateReqPool = this.poolToEdit.reqPool;
    };
    Pool1MangPageComponent.prototype.updatePool = function () {
        this.poolToEdit.csr = this.selectedCsr;
        this.poolToEdit.planner = this.selectedPlanner;
        this.poolToEdit.reqPool = this.updateReqPool;
    };
    Pool1MangPageComponent.prototype.selectCompany = function (item) {
        console.log(item);
        this.selectedCompany = item;
    };
    Pool1MangPageComponent.prototype.selectPlanner = function (item) {
        console.log(item);
        this.selectedPlanner = item;
    };
    Pool1MangPageComponent.prototype.selectCsr = function (item) {
        console.log(item);
        this.selectedCsr = item;
    };
    Pool1MangPageComponent.prototype.nextPage = function () {
        console.log("nextPage");
        this.pageNumber += 1;
        this.lLimit = this.pageNumber * 4;
        this.uLimit = (this.pageNumber + 1) * 4;
        if (this.uLimit > this.data.length) {
            this.uLimit = this.data.length;
        }
        console.log("nextPage " + this.uLimit);
    };
    Pool1MangPageComponent.prototype.prevPage = function () {
        this.pageNumber -= 1;
        console.log("prevPage");
        this.lLimit = this.pageNumber * 4;
        this.uLimit = (this.pageNumber + 1) * 4;
        if (this.lLimit <= 0) {
            this.lLimit = 0;
        }
    };
    Pool1MangPageComponent.prototype.add = function () {
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
    };
    return Pool1MangPageComponent;
}());
Pool1MangPageComponent = __decorate([
    core_1.Component({
        selector: 'pool1-mang-page',
        templateUrl: 'pool1-mang-page.component.html',
        styleUrls: ['pool1-mang-page.component.css'],
        moduleId: module.id,
    }),
    __metadata("design:paramtypes", [http_1.Http])
], Pool1MangPageComponent);
exports.Pool1MangPageComponent = Pool1MangPageComponent;
// This code copy to app.module.ts
//# sourceMappingURL=pool1-mang-page.component.js.map