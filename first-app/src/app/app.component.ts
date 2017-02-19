import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//      <h1>Inline Template</h1>
// 		<other></other>
// 		<fa-another>
// 			<div>
// 				<h2>Hello!</h2>
// 				<p>World</p>
// 			</div>
// 		</fa-another>
// 		<fa-another></fa-another>
//   `,
//   styles: [
// `
//   h1 {
//   	color: red;
//   }
// `

//   ]
//   // styleUrls: ['./app.component.css']
// })


@Component({
  selector: 'app-root',
  template: `
     <h1>Root component</h1>
     <app-lifecycle *ngIf="!delete" [bindable]="boundValue">
        <p #boundContent>{{test}}</p>
     </app-lifecycle>
     <button (click)="delete=true">Click to delete</button>
      <button (click)="test=' Changed VAlue'">Click to change</button>
            <button (click)="boundValue=2000">Click to change binding</button>
  `,
  styles: [
`
  h1 {
    color: red;
  }
`

  ]
  // styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'I changed it';
  test='starting value'
  delete = false;
  boundValue=500;
}
