import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoopingList } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeFormComponent } from './recipes/recipe-form/recipe-form.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoopingEditComponent } from './shopping-list/shooping-edit/shooping-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { DropdownDirective } from './shared/dropdown.directive';

import { ShoopingService } from './shopping-list/shopping.service';
import { RecipeService } from './recipes/recipe.service';

import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoopingList,
    RecipesComponent,
    RecipeListComponent,
    RecipeFormComponent,
    RecipeDetailComponent,
    ShoopingEditComponent,
    RecipeItemComponent,
    DropdownDirective,
    RecipeStartComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [RecipeService, ShoopingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
