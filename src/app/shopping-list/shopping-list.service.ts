import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private imageBasePath = '../assets/images/ingredients/';
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5, `${this.imageBasePath}apple.png`),
    new Ingredient('Hylian Shroom', 10, `${this.imageBasePath}hylian-shroom.png`),
    new Ingredient('Raw Bird Drumstick', 2, `${this.imageBasePath}raw-bird-drumstick.png`),
    new Ingredient('Raw Meat', 7, `${this.imageBasePath}raw-meat.png`)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient({ name, amount, imagePath }) {
    const newIngredient = { name, amount, imagePath: `${this.imageBasePath}${imagePath}` };
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}


// TODO:
// Manage the shopping list ingredients
// Add the "Add Ingredient" function here
