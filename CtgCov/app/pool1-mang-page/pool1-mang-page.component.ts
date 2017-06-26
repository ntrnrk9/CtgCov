import { Component } from '@angular/core';
import { FilterCPipe } from '../Filters/filterC.pipe';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'pool1-mang-page',
    templateUrl: 'pool1-mang-page.component.html',
    styleUrls: [ 'pool1-mang-page.component.css'],
    moduleId: module.id,
    //pipes: [FilterCPipe]
})
export class Pool1MangPageComponent {
    private name = 'Pool1Mang-pageComponent';
    cityFil: String = "";
    stateFil: String = "";
    ccFil: String = "";
    selectedVarience: Number = 1;
    data: any[] = [];
    pageNum: Number = 1;
    countryList: any = ["AL","AZ","AR"];
    cityList: any = ["Birmingham", "Cullman", "Gentry", "North Little Rock", "Phoenix"];
    ccList: any = ["Averitt", "Serta", "Walmart 6008", "Valspar"];
    allCities: any = [{ "cityName": "Cayuga", "cityState": "WI", "cityZip": "54546", "cityCountry": 3, "cityRegion": "UPMID", "cityLatitude": "46.24000", "cityLongtitude": "90.68000" }, { "cityName": "Cazenovia", "cityState": "WI", "cityZip": "53924", "cityCountry": 3, "cityRegion": "UPMID", "cityLatitude": "43.52000", "cityLongtitude": "90.20000" }];
    allStates: any = [];
    allCC: any = [];
    selectVarience(value: Number) {
        this.data = [];
        console.log(this.selectedVarience);
        console.log(this.cityFil+" "+this.stateFil);
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
                if (j.variance >0) {
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
            pool:"WALBEN34"
        }],
        column: ["State", "City", "Pool #", "Company", "CSR", "Planner","TMW", "Req Pool","Current","Variance","Action"]
    };
    private getAllCities() {
        alert("hi");
        this.http.get("http://192.168.1.77:81/TrailersCheck.asmx/GetAllCities").map(res => res.json())
            .subscribe(
            (data) => { console.log(data); alert("Success"); this.allCities = data; }, //For Success Response
            err => { console.error(err) } //For Error Response
            );      
    }
    private getAllStates() {
        alert("hi");
        this.http.get("http://192.168.1.77:81/TrailersCheck.asmx/GetAllStates").map(res => res.json())
            .subscribe(
            (data) => { console.log(data); alert("Success"); this.allStates = data; }, //For Success Response
            err => { console.error(err) } //For Error Response
            );
    }
    private getAllCompany() {
        alert("hi");
        this.http.get("http://192.168.1.77:81/TrailersCheck.asmx/GetAllCompanies").map(res => res.json())
            .subscribe(
            (data) => { console.log(data); alert("Success"); this.allCC = data; }, //For Success Response
            err => { console.error(err) } //For Error Response
            );
    }

    constructor(private http: Http) {
        this.selectVarience(1);
        this.getAllCities();
        this.getAllStates();
        this.getAllCompany();
    }

    

    private addTrailer() {

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
        this.ob.groups.push(ele);
        

    }

}

// This code copy to app.module.ts
