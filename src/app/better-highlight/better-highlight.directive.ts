import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostListener('mouseenter') mouseover(eventData:Event ){
       this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }

  constructor( private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
   // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
  }
  
   @HostListener('mouseleave') mouseleave(eventData:Event ){
       this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
  }
}
