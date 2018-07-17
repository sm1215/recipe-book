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

  imageBasePath = '../assets/images/ingredients/';

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5, `${this.imageBasePath}apple.png`),
    new Ingredient('Hylian Shroom', 10, `${this.imageBasePath}hylian-shroom.png`),
    new Ingredient('Raw Bird Drumstick', 2, `${this.imageBasePath}raw-bird-drumstick.png`),
    new Ingredient('Raw Meat', 7, `${this.imageBasePath}raw-meat.png`)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded (newIngredient: Ingredient) {
    newIngredient.imagePath = `${this.imageBasePath}${newIngredient.imagePath}`;
    this.ingredients.push(newIngredient);
  }

}
