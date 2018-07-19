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

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach((ingredient) => {
      let imagePath = ingredient.imagePath;

      // Sometimes the basePath isn't present
      // Checking for that here
      if (imagePath.split('/').length < 2) {
        imagePath = `${this.imageBasePath}${imagePath}`;
      }

      const newIngredient = {
        name: ingredient.name,
        amount: ingredient.amount,
        imagePath: imagePath
      };
      this.ingredients.push(newIngredient);
    });
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
