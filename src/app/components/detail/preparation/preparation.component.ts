import { Component, Input } from '@angular/core';
import { Recipe } from '../../../services/recipes/recipe';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-preparation',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './preparation.component.html',
  styleUrl: './preparation.component.css'
})
export class PreparationComponent {

  @Input() steps!: string[];

}
