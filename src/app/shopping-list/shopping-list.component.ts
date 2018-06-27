import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

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
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5, '../assets/images/ingredients/apple.png'),
    new Ingredient('Hylian Shroom', 10, '../assets/images/ingredients/hylian-shroom.png'),
    new Ingredient('Raw Bird Drumstick', 2, '../assets/images/ingredients/raw-bird-drumstick.png'),
    new Ingredient('Raw Meat', 7, '../assets/images/ingredients/raw-meat.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
