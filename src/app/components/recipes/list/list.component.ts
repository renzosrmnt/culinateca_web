import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../services/recipes/recipe';
import { RecipeService } from '../../../services/recipes/recipe.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { CardComponent } from "../../general/card/card.component";

@Component({
    selector: 'app-list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
    imports: [MatPaginatorModule, RouterLink, CardComponent]
})

export class ListComponent implements OnInit {

  recipes: Recipe[] = [];
  pageSize = 10; // Número de recetas por página
  currentPage = 1; // Página actual
  totalRecipes = 0; // Total de recetas

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipesByPage(this.currentPage, this.pageSize).subscribe(response => {
      this.recipes = response.recipes;
      this.totalRecipes = response.total;
      console.log('Total recipes:', this.totalRecipes); // Log para depuración
    });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getRecipes();
  }
}
