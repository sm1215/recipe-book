import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputReference: ElementRef;
  @ViewChild('amountInput') amountInputReference: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    const name = this.nameInputReference.nativeElement.value || 'Unnamed';
    const amount = this.amountInputReference.nativeElement.value || 1;

    // TODO: Will need a way to add images to ingredients
    // This is extra and not part of the course examples
    const imagePath = 'apple.png';
    const newIngredient = new Ingredient(name, amount, imagePath);
    this.shoppingListService.addIngredients([newIngredient]);
  }

}
