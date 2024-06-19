import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  query: string = '';

  constructor(private router: Router) { }

  onSearch() {
    if (this.query) {
      this.router.navigate(['/results'], { queryParams: { search: this.query } });
      this.query = '';
    }
  }

}
