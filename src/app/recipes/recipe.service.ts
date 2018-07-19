import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  // TODO: Eventually create an Ingredients service that holds static ingredients
  // Should be able to just associate ingredients using a name
  // or probably better a generic type like "fruit", "mushroom", or "meat"
  private imageBasePath = '../assets/images/ingredients/';

  private recipes: Recipe[] = [
    new Recipe(
      'Fruit and Mushroom Mix',
      'Enter description info',
      './assets/images/recipes/fruit-and-mushroom-mix.png',
      [
        new Ingredient('Apple', 1, `${this.imageBasePath}/apple.png`),
        new Ingredient('Hylian Shroom', 1, `${this.imageBasePath}/hylian-shroom.png`)
      ]
    ),
    new Recipe(
      'Meat and Mushroom Skewer',
      'Enter description info',
      './assets/images/recipes/meat-and-mushroom-skewer.png',
      [
        new Ingredient('Raw Meat', 1, `${this.imageBasePath}/raw-meat.png`),
        new Ingredient('Hylian Shroom', 1, `${this.imageBasePath}/hylian-shroom.png`)
      ]
    ),
    new Recipe(
      'Meat Skewer',
      'Enter description info',
      './assets/images/recipes/meat-skewer.png',
      [
        new Ingredient('Raw Meat', 1, `${this.imageBasePath}/raw-meat.png`)
      ]
    ),
    new Recipe(
      'Mushroom Skewer',
      'Enter description info',
      './assets/images/recipes/mushroom-skewer.png',
      [
        new Ingredient('Hylian Shroom', 1, `${this.imageBasePath}/hylian-shroom.png`)
      ]
    ),
    new Recipe(
      'Simmered Fruit',
      'Enter description info',
      './assets/images/recipes/simmered-fruit.png',
      [
        new Ingredient('Apple', 1, `${this.imageBasePath}/apple.png`)
      ]
    )
  ];

  getRecipes() {
    // return this.recipes; // Doing this would return the direct reference and allow for mutation
    return this.recipes.slice(); // Doing this would return a new array - no mutation
  }
}
