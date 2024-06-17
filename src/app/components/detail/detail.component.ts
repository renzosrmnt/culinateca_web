import { Component, OnInit } from '@angular/core';
import { PresentationComponent } from "./presentation/presentation.component";
import { IngredientsComponent } from "./ingredients/ingredients.component";
import { PreparationComponent } from "./preparation/preparation.component";
import { Recipe } from '../../services/recipes/recipe';
import { RecipeService } from '../../services/recipes/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail',
    standalone: true,
    templateUrl: './detail.component.html',
    styleUrl: './detail.component.css',
    imports: [PresentationComponent, IngredientsComponent, PreparationComponent]
})
export class DetailComponent implements OnInit {
  
  recipe: Recipe | undefined;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.getRecipeDetail();
  }

  getRecipeDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipeById(id)
        .subscribe(recipe => this.recipe = recipe);
    }
  }

  // Método para marcar un ítem como completado
  markAsCompleted(list: string[], index: number): void {
    list[index] = `[✓] ${list[index]}`;
  }
}
