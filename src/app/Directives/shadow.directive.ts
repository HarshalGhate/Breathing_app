import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  constructor(private el: ElementRef) { }

  isPlaying=false
  @HostListener('click') click() {
    this.isPlaying = !this.isPlaying
    if(this.isPlaying){
      this.el.nativeElement.style.boxShadow = "inset 0 0 15px 0 #ffc078"
    }
    else{
      this.el.nativeElement.style.boxShadow = "none"
    }
    // this.el.nativeElement.style.boxShadow = "inset 0 0 0 3px #ffc078"
  }
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.el.nativeElement.style.boxShadow = "none"
  //   this.el.nativeElement.style.backgroundColor  = "yellow"
  // }
}
