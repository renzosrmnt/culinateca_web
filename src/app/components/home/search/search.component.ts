import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  
  query: string = '';

  constructor(private router: Router) { }

  onSearch() {
    if (this.query) {
      this.router.navigate(['/results'], { queryParams: { search: this.query } });
    }
  }
}