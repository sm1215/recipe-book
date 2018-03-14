import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.interface';
import { Ingredient } from '../../ingredient.interface';

import { RecipeBookComponent } from '../recipe-book.component';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})

// This component should provide functionality for editing an existing recipe or adding a new one.
export class EditRecipeComponent implements OnInit {
  id: number;
  name: string;
  ingredients: Array<Ingredient>;
  instructions: string;

  // constructor(recipe?: Recipe) {
  constructor() { }

  setRecipe(recipe?: Recipe) {
    if (recipe) {
      this.id = recipe.id;
      this.name = recipe.name;
      this.ingredients = recipe.ingredients;
      this.instructions = recipe.instructions;
    } else {
      this.id = RecipeBookComponent.setupNewId();
      this.name = 'Enter a name';
      this.ingredients = [];
      this.instructions = 'Enter some instructions';
    }
  }

  ngOnInit() {
  }

}
