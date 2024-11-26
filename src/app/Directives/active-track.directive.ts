import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appActiveTrack]'
})
export class ActiveTrackDirective {
  private isPlaying: boolean = false;

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    this.toggleActiveState();
  }

  private toggleActiveState() {
    this.isPlaying = !this.isPlaying;
    this.updateStyle();
  }

  private updateStyle() {
    if (this.isPlaying) {
      this.el.nativeElement.style.boxShadow = "inset 0 0 15px 0 #ffc078";
    } else {
      this.el.nativeElement.style.boxShadow = "none";
    }
  }

  deactivate() {
    this.isPlaying = false;
    this.updateStyle();
  }
}
