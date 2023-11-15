import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingrediant } from '../shared/ingrediant.model';
import { ShoopingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  constructor(private shoopingService: ShoopingService) {}
  private recipes: Recipe[] = [
    new Recipe(
      '1',
      'A Test recipe',
      'first one',
      'https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_1920,c_limit/04102023-ratatouille-lede.jpg',
      [
        new Ingrediant(+Date.now().toString() - 100, 'Meat', 1),
        new Ingrediant(+Date.now().toString() - 200, 'French Fries', 20),
      ]
    ),
    new Recipe(
      '2',
      'A Test recipe',
      'first two',
      'https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_1920,c_limit/04102023-ratatouille-lede.jpg',
      [
        new Ingrediant(+Date.now().toString() - 300, 'Meat', 1),
        new Ingrediant(+Date.now().toString() - 400, 'Buns', 2),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: string) {
    const currentIndex = this.recipes.findIndex((res) => res.id === id);
    // if (!currentIndex && currentIndex !== 0) return;
    console.log(currentIndex);
    return this.recipes[currentIndex];
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes = [...this.recipes, newRecipe];
  }
  editRecipe(id: number) {}
  deleteRecipe(id: number) {}
  toShopList(newIngerdiants: Ingrediant[]) {
    this.shoopingService.addIngrediants(newIngerdiants);
  }
}
