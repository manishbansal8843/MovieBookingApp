import { Directive,Input} from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRecommended]'
})
export class RecommendedDirective {

  @Input() set appRecommended(rate:number){
  //  console.log('calling apprecomended directive');
    if(rate>3){
      let lChild= this.element.nativeElement.lastChild;
      if(lChild.innerHTML!='Recommended'){

    let ele=this.renderer.createElement('div');
    let text=this.renderer.createText('Recommended');
    this.renderer.appendChild(ele,text);
  // this.renderer.addClass(ele,'pull-right');

    this.renderer.addClass(ele,'recommended1');

    this.renderer.appendChild(this.element.nativeElement,ele);
      }
    }
    else{
     let lChild= this.element.nativeElement.lastChild;
     if(lChild.innerHTML=='Recommended'){
       this.renderer.removeChild(this.element.nativeElement,lChild);
     }
    }
  }
  constructor(private element:ElementRef,private renderer:Renderer2) { }

}
