import { Component, Input } from '@angular/core';
import { Recipe } from '../../../services/recipes/recipe';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {

  @Input() recipe: Recipe | undefined ;

}
