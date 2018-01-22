import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appMovieBoxFocus]'
})
export class MovieBoxFocusDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }
  @Input() appMovieBoxFocus:any;
  @HostListener('mouseenter') onmouseover(){
    this.renderer.setStyle(this.element.nativeElement,'background-color','yellow');
  }

  @HostListener('mouseleave') onmouseleave(){
    this.renderer.setStyle(this.element.nativeElement,'background-color','white');
  }
}
