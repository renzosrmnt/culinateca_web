import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private searchService: SearchService) {}

  onSearchSubmit(searchInput: HTMLInputElement) {
    const query = searchInput.value.trim();
    if (query) {
      this.searchService.searchRecipes(query);
    }
  }

}
