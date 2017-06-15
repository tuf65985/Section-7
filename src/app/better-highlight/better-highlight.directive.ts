import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostListener('mouseenter') mouseover(eventData:Event ){
       //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
       this.backgroundColor = 'blue';
  }

  constructor( private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
   // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
  }
  
   @HostListener('mouseleave') mouseleave(eventData:Event ){
      // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
      this.backgroundColor ='transparent';
  }
}
