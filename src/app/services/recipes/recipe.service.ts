// src/app/services/recipe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Recipe } from './recipe';

interface RecipeResponse {
  recipes: Recipe[];
  total: number;
}


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl: string = 'https://culinateca.onrender.com/api/recipes';

  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl).pipe(
      catchError((error) => {
        console.error('Error fetching all recipes:', error);
        return of([] as Recipe[]);
      })
    );
  }

  getRandomRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.baseUrl}/random`).pipe(
      catchError((error) => {
        console.error('Error fetching random recipe:', error);
        // Here we could return a default Recipe object or throw an error
        return of({} as Recipe[]); // Returning an empty object as Recipe
      })
    );
  }

  getNewestRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.baseUrl}/newest`).pipe(
      catchError((error) => {
        console.error('Error fetching newest recipes:', error);
        return of([] as Recipe[]);
      })
    );
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.baseUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('Error fetching recipe by id:', error);
        // Here we could return a default Recipe object or throw an error
        return of({} as Recipe); // Returning an empty object as Recipe
      })
    );
  }

  getRecipesByPage(page: number, pageSize: number): Observable<RecipeResponse> {
    return this.http.get<RecipeResponse>(`${this.baseUrl}/page?page=${page}&pageSize=${pageSize}`).pipe(
      catchError((error) => {
        console.error('Error fetching recipes by page:', error);
        return of({ recipes: [], total: 0 } as RecipeResponse);
      })
    );
  }

  searchRecipesByTitle(title: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.baseUrl}/search?title=${title}`).pipe(
      catchError((error) => {
        console.error('Error fetching all recipes:', error);
        return of([] as Recipe[]);
      })
    );
  }

}
