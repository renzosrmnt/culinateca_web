import { Component, Input } from '@angular/core';
import { Recipe } from '../../../services/recipes/recipe';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css'
})
export class IngredientsComponent {
  @Input() ingredients!: string[];

}
