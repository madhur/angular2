import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Ingredient} from '../shared/ingredient';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  private isAdd = true;
  @Input() item: Ingredient;
  constructor(private sls: ShoppingListService) { }

  ngOnChanges(changes) {
    if(changes.item.currentValue == null) {
      this.isAdd = true;
      this.item = {name: null, amount: null};
    }
    else {
      this.isAdd = false;
    }
  }
 
  onSubmit(ingredeint: Ingredient) {
    

    if(!this.isAdd) {
       // Edit
       this.sls.editItem(this.item, new Ingredient(ingredeint.name, ingredeint.amount));
    }
    else {
      this.item = new Ingredient(ingredeint.name, ingredeint.amount);
      this.sls.addItem(this.item);
    }
  }

}
