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
  query: string = ''

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    // Suscripción a los parámetros de la ruta para obtener el valor del query
    this.route.queryParams.subscribe(params => {
      this.query = params['search'] || ''; // Asigna el valor del query, o cadena vacía si no hay parámetro 'search'

      if (this.query.trim()) {
        this.searchRecipes(); // Realiza la búsqueda si hay un query válido
      } else {
        // Puedes manejar el caso donde el query está vacío, por ejemplo, mostrando un mensaje o realizando alguna acción específica
        console.log('El query está vacío');
      }
    });
  }

  // Método para buscar recetas según el título
  private searchRecipes() {
    this.recipeService.searchRecipesByTitle(this.query.trim()).subscribe({
      next: (recipes: Recipe[]) => {
        this.searchResults = recipes; // Asigna los resultados de la búsqueda
      },
      error: (error) => {
        console.error('Error al buscar recetas:', error);
      }
    });
  }
}
