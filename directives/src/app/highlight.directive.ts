import { Directive , HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  //private elementRef: ElementRef;
  private backgroundColor = 'white';
  @HostListener('mouseenter') mouseOver() {

  	this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouseleave() {

  	this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') get setColor() {
  		return this.backgroundColor;
  };

  constructor() { 

  	// this.elementRef = elementRef;

  	// this.elementRef.nativeElement.style.backgroundColor='green';

  	// this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green')

  }

}
