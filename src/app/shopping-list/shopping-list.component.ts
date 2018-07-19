import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: [`
    .ingredient-thumb {
      height:20px;
      width:20px;
      margin:0 5px 0 0;
    }
  `]
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged
      .subscribe(
        (updatedIngredients: Ingredient[]) => {
          this.ingredients = updatedIngredients;
        }
      );
  }
}
