import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() viewRecipeDetails = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Fruit and Mushroom Mix',
      'Enter description info',
      './assets/images/recipes/fruit-and-mushroom-mix.png'
    ),
    new Recipe(
      'Meat and Mushroom Skewer',
      'Enter description info',
      './assets/images/recipes/meat-and-mushroom-skewer.png'
    ),
    new Recipe(
      'Meat Skewer',
      'Enter description info',
      './assets/images/recipes/meat-skewer.png'
    ),
    new Recipe(
      'Mushroom Skewer',
      'Enter description info',
      './assets/images/recipes/mushroom-skewer.png'
    ),
    new Recipe(
      'Simmered Fruit',
      'Enter description info',
      './assets/images/recipes/simmered-fruit.png'
    )
  ];

  constructor() { }

  ngOnInit() {
    // this.viewRecipeDetails.emit(this.recipes[0]);
  }

  onRecipeSelected(recipe: Recipe) {
    this.viewRecipeDetails.emit(recipe);
  }

}
