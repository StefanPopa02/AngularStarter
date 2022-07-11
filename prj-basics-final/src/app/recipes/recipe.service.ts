import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[new Ingredient('ingredient 1', 5), new Ingredient('ingredient 1.1', 1)]),
        new Recipe('A Test Recipe', 'This is simply a test2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingredient('ingredient 2', 3)])
      ];

      constructor(private shoppingListService: ShoppingListService){

      }

      getRecipes() {
        return [...this.recipes];
      }

      addIngredients(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }

}