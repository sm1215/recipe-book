import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.interface';
import { Ingredient } from '../ingredient.interface';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  recipes: Array<Recipe> = [];

  constructor() {
    this.recipes.push(
      <Recipe>{
        id: 0,
        name: 'Grilled Cheese',
        ingredients: [
          <Ingredient>{ name: 'Bread', qty: 2 },
          <Ingredient>{ name: 'Cheese', qty: 1 }
        ],
        instructions: 'Butter dat bread. Put some cheese in the middle. Grill dat breaad.'
      },
      <Recipe>{
        id: 1,
        name: 'Fried Egg',
        ingredients: [
          <Ingredient>{ name: 'Egg', qty: 1 },
        ],
        instructions: 'Go embarass urself. Crack egg. Put on face. No-rinse, repeat.'
      },
      <Recipe>{
        id: 2,
        name: 'Delicious OJ',
        ingredients: [
          <Ingredient>{ name: 'Orange', qty: 1 },
          <Ingredient>{ name: 'Bannanaa', qty: 3 }
        ],
        instructions: 'Take these bannanas and go.'
      }
    );

    console.log(this);

  }

  ngOnInit() {
  }

}
