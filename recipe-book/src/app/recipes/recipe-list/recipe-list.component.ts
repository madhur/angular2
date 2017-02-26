import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
      new Recipe('Chutney', 'good chutney', 'http://www.vegrecipesofindia.com/wp-content/uploads/2013/03/coriander-chutney-recipe.jpg', []),
      new Recipe('Chicken', 'good chicken' , 'http://www.pngmart.com/files/2/Cooked-Chicken-PNG-Transparent-Image.png', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
 // recipe = new Recipe('dummy', 'dummy desc', 'http://thumbs2.ebaystatic.com/d/l225/m/mM5u2kVAYbs3IRlwPfl6uOA.jpg')

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
  		this.recipeSelected.emit(recipe);
  }

}
