import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FooterComponent } from "./components/general/footer/footer.component";
import { HeaderComponent } from "./components/general/header/header.component";
import { RecipeService } from './services/recipes/recipe.service';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink ,FooterComponent, HeaderComponent],
    providers: [RecipeService]
})
export class AppComponent {
  title = 'culinatecaWeb';
}
