import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit {
  private isAdd = true;
  private item: Ingredient;
  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(ingredeint: Ingredient) {
    if(!this.isAdd) {
       // Edit
    }
    else {
      this.item = new Ingredient(ingredeint.name, ingredeint.amount);
      this.sls.addItem(this.item);
    }
  }

}
