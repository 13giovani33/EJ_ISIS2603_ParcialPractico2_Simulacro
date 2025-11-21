import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './Recipe';

// <> `
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiURL: string = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas';

constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiURL}/recipe.json`);
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiURL}/${id}/recipe.json`);
  }

 // createRecipe(recipe: Recipe): Observable<Recipe> {
 //   return this. http.post<Recipe>(this.apiURL, recipe);
 // }
 

}
