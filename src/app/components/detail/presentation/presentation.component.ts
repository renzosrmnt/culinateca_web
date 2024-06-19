import { Component, Input } from '@angular/core';
import { Recipe } from '../../../services/recipes/recipe';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {

  @Input() recipe: Recipe | undefined ;

}
