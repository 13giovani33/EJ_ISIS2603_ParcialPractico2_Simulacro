import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Recipe';
import { Ingredient } from '../../ingredient/Ingredient';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  recipeId!: string;
  @Input() recipe!: Recipe;
  maxIngredient!: Ingredient;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  getRecipe(){
    this.recipeService.getRecipe(this.recipeId).subscribe(apiData => {this.recipe = apiData;});
  }
  ngOnInit() {
    if(this.recipe === undefined){
      this.recipeId = this.route.snapshot.paramMap.get('id')!
      if(this.recipeId){
        this.getRecipe();
      }
    }
  }

  calculateMaxIngredient() {
    if (this.recipe && this.recipe.ingredientes.length > 0) {
      this.maxIngredient = this.recipe.ingredientes.reduce((max, ing) => 
        ing.cantidad > max.cantidad ? ing : max
      , this.recipe.ingredientes[0]);
    }
  }

}
