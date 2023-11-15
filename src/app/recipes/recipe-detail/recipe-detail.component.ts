import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}
  inputRecipe: Recipe;
  id: string;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(params['id']);
      this.inputRecipe = this.recipeService.getRecipe(params['id']);
      console.log(this.inputRecipe);
    });
    console.log(this.inputRecipe);
  }

  addIngrediants() {
    this.recipeService.toShopList(this.inputRecipe.ingrediants);
  }
}
