import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name:'filterC'
})
export class FilterCPipe implements PipeTransform {
    transform(objects: any, param?:any,key?:any): any {
        //check if search term is undef
        if (param === undefined || key === undefined) {
            return objects;
        }
        return objects.filter(function (item: any) {
            //console.log(key + " " + item[key]);
            var check = item[key];
            return check.toLowerCase().includes(param.toLowerCase());
        })
    }  
}

// This code copy to app.module.ts
//