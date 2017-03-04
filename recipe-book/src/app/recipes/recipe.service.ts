import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';
import {Headers, Http} from '@angular/http';

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
  
  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }


  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers( {
      'Content-Type': 'application/json'
    });

    return this.http.post('https://recipebook-5e9ec.firebaseio.com/recipes.json', body, {
      headers: headers
    });
  }

  fetchData() {

  }
}
