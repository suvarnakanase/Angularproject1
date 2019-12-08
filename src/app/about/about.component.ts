import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private myvar: MyServiceService) { }

  ngOnInit() {
    console.log("about us page" + "about us page" + this.myvar.method1());
    console.log("about us page" + this.myvar.method2());

    this.myvar.selectData().subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    )
    
  }

}
