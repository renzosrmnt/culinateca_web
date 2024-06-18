import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../services/recipes/recipe';
import { CardComponent } from "../general/card/card.component";
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../services/recipes/recipe.service';

@Component({
    selector: 'app-results',
    standalone: true,
    templateUrl: './results.component.html',
    styleUrl: './results.component.css',
    imports: [CardComponent]
})
export class ResultsComponent implements OnInit {
  searchResults: Recipe[] = [];

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const query = params['search'];
      if (query.trim()) {
        this.recipeService.searchRecipesByTitle(query.trim()).subscribe({
          next: (recipes: Recipe[]) => {
            this.searchResults = recipes;
          },
          error: (error) => {
            console.error('Error al buscar recetas:', error);
          }
        });
      }
    });
  }
}
