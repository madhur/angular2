import { Component, OnInit } from '@angular/core';
import {RecipeService} from './recipes/recipe.service';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService) { }

  
  onFetch() {

  }

  onStore() {
    this.recipeService.storeData().subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }

}

