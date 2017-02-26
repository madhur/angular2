import { Injectable } from '@angular/core';
import { Recipe } from './recipe'
import { Ingredient } from '../shared/ingredient'
@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
      new Recipe('Chutney', 'good chutney', 'http://www.vegrecipesofindia.com/wp-content/uploads/2013/03/coriander-chutney-recipe.jpg', [
          new Ingredient('French Fries', 2),
          new Ingredient('Pork Meat', 2)

      ]),
      new Recipe('Chicken', 'good chicken' , 'http://www.pngmart.com/files/2/Cooked-Chicken-PNG-Transparent-Image.png', [
        new Ingredient('French Fries', 2)
      ])
  ];
  
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

}
