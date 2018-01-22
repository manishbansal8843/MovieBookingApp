import { Directive } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appRepeat5]'
})
export class RepeatDirective {

  constructor(private _tempref:TemplateRef<any>,private viewcontainer:ViewContainerRef) { }
@Input() set appRepeat5(count:number){
  this.viewcontainer.clear();
  for(let i=0;i<5;i++){
    this.viewcontainer.createEmbeddedView(this._tempref,{boolval:i<count?true:false});
  }
}
}
