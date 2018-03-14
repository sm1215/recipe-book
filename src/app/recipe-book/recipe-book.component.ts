import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.interface';
import { Ingredient } from '../ingredient.interface';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  lastId = 0;
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
      this.addRecipe(recipe);
    });
  }

  setupNewId() {
    const lastId = this.lastId;
    this.lastId++;
    return lastId;
  }

  addRecipe(recipe: Recipe) {
    recipe.id = this.setupNewId();
    this.recipes.push(recipe);
  }

  ngOnInit() {
  }

}
