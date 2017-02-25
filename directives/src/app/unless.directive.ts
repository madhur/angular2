import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[dirUnless]'
})
export class UnlessDirective {

	private switch = false;

  @Input() set dirUnless(condition: boolean) {
      console.log(condition);
  	if(!condition) {
  		this.vcRef.createEmbeddedView(this.templateRef);
  	}
  	else {
  		this.vcRef.clear();
  	}

  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
