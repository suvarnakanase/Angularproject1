import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private myvarhttp : HttpClient ) {
    console.log(this.myvarhttp);
   }

  method1(){
    return "Service1 injected";
  }
  method2(){
    return "Service2 injected";
  }

  selectData(){
    return this.myvarhttp.get("https://jsonplaceholder.typicode.com/users");
  };
}
