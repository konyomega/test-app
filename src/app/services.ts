
import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
 res:any = {
    
    "email":"kunal@gmail.com",
    "password":"123@"
 };
 get(res:any){
console.log("get service");
 }
   
}
 