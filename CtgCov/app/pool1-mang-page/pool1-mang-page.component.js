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
var Pool1MangPageComponent = (function () {
    function Pool1MangPageComponent() {
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
        this.config = {
            rows: [{
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
    }
    Pool1MangPageComponent.prototype.selectVarience = function (value) {
        this.data = [];
        console.log(this.selectedVarience);
        console.log(this.cityFil + " " + this.stateFil);
        this.selectedVarience = value;
        // ... do other stuff here ...
        for (var _i = 0, _a = this.config.rows; _i < _a.length; _i++) {
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
    return Pool1MangPageComponent;
}());
Pool1MangPageComponent = __decorate([
    core_1.Component({
        selector: 'pool1-mang-page',
        templateUrl: 'pool1-mang-page.component.html',
        styleUrls: ['pool1-mang-page.component.css'],
        moduleId: module.id,
    }),
    __metadata("design:paramtypes", [])
], Pool1MangPageComponent);
exports.Pool1MangPageComponent = Pool1MangPageComponent;
// This code copy to app.module.ts
//# sourceMappingURL=pool1-mang-page.component.js.map