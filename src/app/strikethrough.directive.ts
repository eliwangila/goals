import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) {}

  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }
  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }


  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;
   

}

}
