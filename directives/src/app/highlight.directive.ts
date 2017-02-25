import { Directive , HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  //private elementRef: ElementRef;
  private backgroundColor :string;
  @HostListener('mouseenter') mouseOver() {

  	this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {

  	this.backgroundColor = this.defaultColor;
  }

  @Input() defaultColor='white';
  @Input('dirHighlight') highlightColor='green';

  @HostBinding('style.backgroundColor') get setColor() {
  		return this.backgroundColor;
  };

  ngOnInit() {
  	this.backgroundColor = this.defaultColor;
  }

  constructor() { 

  	// this.elementRef = elementRef;

  	// this.elementRef.nativeElement.style.backgroundColor='green';

  	// this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green')

  }

}
