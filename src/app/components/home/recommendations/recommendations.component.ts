import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../services/recipes/recipe.service';
import { Recipe } from '../../../services/recipes/recipe';
import { RouterLink } from '@angular/router';
import { CardComponent } from "../../general/card/card.component";

@Component({
    selector: 'app-recommendations',
    standalone: true,
    templateUrl: './recommendations.component.html',
    styleUrl: './recommendations.component.css',
    imports: [RouterLink, CardComponent]
})
export class RecommendationsComponent implements OnInit  {

  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRandomRecipes().subscribe({
      next: (data: Recipe[]) => {
        console.log('Received data:', data); // Verifica si los datos se están recibiendo
        this.recipes = data;
      },
      error: (err) => {
        console.error('Error fetching recipes', err);
      }
    });
  }

}
