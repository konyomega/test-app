
import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
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
 getData(): Observable<string> {
  return this.http.get<string>(this.apiUrl);
}

}
