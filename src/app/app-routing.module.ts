import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoopingList } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeFormComponent } from './recipes/recipe-form/recipe-form.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';

const appRouts: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeFormComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeFormComponent },
    ],
  },
  { path: 'shooping', component: ShoopingList },
];
@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
