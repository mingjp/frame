import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hl]',
  host: {
    '(document:click)': 'onclick($event)'
  }
})
export class HighlightDirective {
 
  @Input() hl: string;
  @Input() color: string;
  @Input('attrid') id: string;
  // props: []-

  constructor(el: ElementRef) {
    el.nativeElement.style.background = 'yellow';
    console.log(el);
  }

  //依赖注入
  // @HostListener('document:click', ['$event']) onclick(event) {
  //   console.log(event.target);
  // }

  onclick(event){
    console.log(this);
    // console.log(event.target);
  }

  
}
