
import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@NgModule({
    imports:[],
    exports: [],
    declarations:[]
})

@Injectable({
  providedIn: 'root'
})


export class Services {
  constructor(private http: HttpClient) { }
  add(arr: any){
   console.log(arr);
   return console.log('(add service);'+arr.name);
 }  
   
}
 