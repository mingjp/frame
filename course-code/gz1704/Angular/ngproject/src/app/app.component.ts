import { Component, Input, OnInit, AfterContentInit } from '@angular/core';
import {Hero} from './models/hero';
import { DictionayService } from './service/dictionary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterContentInit {
  title = 'Tour of Heros';
  @Input() api: string;
  hero: Hero = {
    id: 1,
    name: 'Tom'
  }
  
  constructor(private dictionary: DictionayService){}

  ngOnInit() {
    // console.log(this.api);
  }

  ngAfterContentInit() {
    // console.log(this.api);
  }

  onClick() {
    // console.log(this);
  }

  parentEvent(arg1){
    console.log(this.dictionary);
    console.log(arg1);
  }
}