import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; 
import {HEROES} from '../mock-heroes';
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
  
  constructor() { }

  ngOnInit() {
  }

}
