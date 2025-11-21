import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { IngredientModule } from '../ingredient/ingredient.module';
import { AppRoutingModule } from "../app-routing.module";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [RecipeListComponent, RecipeDetailComponent],
  imports: [CommonModule, IngredientModule, AppRoutingModule, RouterModule],
  exports: [RecipeListComponent, RecipeDetailComponent],
})
export class RecipeModule {}
