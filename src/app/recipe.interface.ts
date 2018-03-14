import { Ingredient } from './ingredient.interface';

export interface Recipe {
    id?: number;
    name: string;
    ingredients: Array<Ingredient>;
    instructions: string;
}
