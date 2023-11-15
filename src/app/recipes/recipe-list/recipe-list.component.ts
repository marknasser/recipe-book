import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  recipes: Recipe[];
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}

// https://www.acouplecooks.com/wp-content/uploads/2021/08/Ratatouille-Recipe-009.jpg
// https://www.eatingwell.com/thmb/Q41yPc8R2PKlBSXZNbBpyzaom_A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cucumber-sandwich-eddcc95811f5426094ea5dbea6a6b026.jpg
