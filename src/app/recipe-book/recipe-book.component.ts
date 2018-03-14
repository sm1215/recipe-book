import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.interface';
import { Ingredient } from '../ingredient.interface';

import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  static lastId = 0;
  recipes: Array<Recipe> = [];
  samples = [
    {
      name: 'Grilled Cheese',
      ingredients: [
        { name: 'Bread', qty: 2 },
        { name: 'Cheese', qty: 1 }
      ],
      instructions: 'Butter dat bread. Put some cheese in the middle. Grill dat breaad.'
    },
    {
      name: 'Fried Egg',
      ingredients: [
        { name: 'Egg', qty: 1 }
      ],
      instructions: 'Go embarass urself. Crack egg. Put on face. No-rinse, repeat.'
    },
    {
      name: 'Delicious OJ',
      ingredients: [
        { name: 'Orange', qty: 1 },
        { name: 'Bannanaa', qty: 3 }
      ],
      instructions: 'Take these bannanas and go.'
    }
  ];

  constructor() {
    this.samples.forEach((recipe) => {
      this.addKnownRecipe(recipe);
    });
  }

  static setupNewId() {
    const lastId = this.lastId;
    this.lastId++;
    return lastId;
  }

  addKnownRecipe(recipe: Recipe) {
    recipe.id = RecipeBookComponent.setupNewId();
    this.recipes.push(recipe);
  }

  onAddRecipe() {
    // Need to have access to EditRecipeComponent.addRecipe()
    // Options:
    // 1) Change addRecipe to a static method.
    //   --> Does this even make sense for the class structure?
    // 2) Instantiate a new instance of EditRecipeComponent and make the call from that.
    //   --> It's easy to create components in HTML, but how in TS?

  }

  ngOnInit() {
  }

}
