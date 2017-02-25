import { Directive , ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  private elementRef: ElementRef;
  constructor(elementRef: ElementRef, private renderer: Renderer) { 

  	this.elementRef = elementRef;

  	//this.elementRef.nativeElement.style.backgroundColor='green';

  	this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green')

  }

}
