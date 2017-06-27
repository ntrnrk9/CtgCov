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
        this.selectedCompany = "Select a company";
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
        this.allStates = [];
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
            column: ["State", "City", "Pool #", "Company", "CSR", "Planner", "TMW", "Req Pool", "Current", "Variance", "Action"]
        };
        this.selectVarience(1);
        this.getAllCities();
        this.getAllStates();
        this.getAllCompany();
        this.getAllCsr();
        this.getAllPlanner();
    }
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
        this.ob.groups.push(ele);
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