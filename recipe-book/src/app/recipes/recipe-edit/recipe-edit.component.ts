import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Subscription} from "rxjs/RX";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private recipeIndex: number;

  constructor(
    private route: ActivatedRoute, 
    private sls: RecipeService
    ) { }

  ngOnInit() {
    let isNew = true;

    this.subscription = this.route.params.subscribe(
      (params:any) => {
        if(params.hasOwnProperty('id')) {
          isNew = false;
           this.recipeIndex = +params['id']
        }
        else {
          isNew = true;
        }
      }
      
    );
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
