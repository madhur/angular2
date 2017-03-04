import { Component, OnInit } from '@angular/core';
import {RecipeService} from './recipes/recipe.service';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService) { }

  
  onFetch() {

        this.recipeService.fetchData().subscribe(
      data => {
        let recipes = [];
        debugger;
        for(var key in data.json()) {
          recipes.push(data.json()[key]);
        }

        console.log(recipes);
      },
      error => console.error(error)
    );

  }

  onStore() {
    this.recipeService.storeData().subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }

}

