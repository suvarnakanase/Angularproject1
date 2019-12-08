import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; 
import {HEROES} from '../mock-heroes';
import { MyServiceService } from '../my-service.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'suvarna'
  // }
  selectedHero : Hero;
  onSelect(heroes: Hero){
    this.selectedHero = heroes;
  }
  herolist = HEROES;
  
  constructor(private myvar : MyServiceService) { }

  ngOnInit() {
    console.log("contact page" + this.myvar.method1());
    console.log("contact page" + this.myvar.method2());
  }

}
