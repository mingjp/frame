import { Directive, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Directive({
  selector: '[listoption]'
})
export class ListoptionDirective implements OnInit {
  @Input() ds: Object;

  constructor(private http: Http) { }

  ngOnInit(){
    console.log(this.ds);
  }
}
