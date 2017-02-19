import { 
  Component, 
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input , ViewChild, ContentChild} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
  <ng-content></ng-content>
    <p>
      lifecycle Works!
    </p>
    <p #boundParagraph>{{bindable}}</p>
    <p> {{boundParagraph.textContent}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() bindable = 1000;

  @ViewChild('boundParagraph') boundParagraph: HTMLElement;

  @ContentChild('boundContent') boundContent: HTMLElement;

  constructor() { }

  ngOnChanges() {
      this.log('ngOnChanges');
  }



  ngOnInit() {

    this.log('ngOnInit');
  }

  ngAfterContentInit() {

    this.log('ngAfterContentInit');
    console.log(this.boundContent);
  }


 ngDoCheck() {
   this.log('ngDoCheck');
 }


  ngAfterContentChecked() {
      this.log('ngAfterContentChecked');
     // console.log(this.boundParagraph);
  }

  ngAfterViewInit() {
      this.log('ngAfterViewInit');
      //console.log(this.boundParagraph);

  }

  ngAfterViewChecked() {
      this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
      this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
  

}
