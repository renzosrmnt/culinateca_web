import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-called',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './called.component.html',
  styleUrl: './called.component.css'
})
export class CalledComponent {

}
