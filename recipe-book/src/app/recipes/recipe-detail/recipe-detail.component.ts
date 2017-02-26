import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Recipe} from '../recipe';
import {ShoppingListService} from '../../shopping-list/shopping-list.service'
import {Subscription} from "rxjs/Rx";
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  private subscription: Subscription;
  private recipeIndex: number;

  constructor(private sls: ShoppingListService, private route: ActivatedRoute, private recipesService: RecipeService) { }

  onAddShoppingList() {
    console.log(this.selectedRecipe.ingredients);
    //alert('clicked');
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
