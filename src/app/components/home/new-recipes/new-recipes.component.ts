import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../services/recipes/recipe.service';
import { Recipe } from '../../../services/recipes/recipe';

@Component({
  selector: 'app-new-recipes',
  standalone: true,
  imports: [],
  templateUrl: './new-recipes.component.html',
  styleUrls: ['./new-recipes.component.css']
  
})
export class NewRecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getNewestRecipes().subscribe({
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
