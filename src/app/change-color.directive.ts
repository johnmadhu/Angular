import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private _elementRef:ElementRef) {
      this._elementRef.nativeElement.style.color = 'red';
   }
   @HostListener('mouseenter')mouseEnter(){
     this.changeColor('green');
   }
   @HostListener('mouseleave')mouseLeave(){
    this.changeColor('red');
  }
   changeColor(clr){
     this._elementRef.nativeElement.style.color=clr;
   }
}
