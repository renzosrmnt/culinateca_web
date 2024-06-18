import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipes/recipe';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchResultsSubject = new BehaviorSubject<Recipe[]>([]);
  public searchResults$: Observable<Recipe[]> = this.searchResultsSubject.asObservable();

  constructor(private http: HttpClient) {}

  searchRecipes(query: string) {
    this.http.get<Recipe[]>('/api/recipes/search', { params: { query } })
      .subscribe(
        (recipes: Recipe[]) => {
          this.searchResultsSubject.next(recipes);
        },
        (error) => {
          console.error('Error al buscar recetas:', error);
          // Manejo de errores según tu aplicación
        }
      );
  }
  
}
