import { Injectable } from '@angular/core';
import { Recipe } from './recipe'

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
      new Recipe('Chutney', 'good chutney', 'http://www.vegrecipesofindia.com/wp-content/uploads/2013/03/coriander-chutney-recipe.jpg', []),
      new Recipe('Chicken', 'good chicken' , 'http://www.pngmart.com/files/2/Cooked-Chicken-PNG-Transparent-Image.png', [])
  ];
  
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
