import { Component } from '@angular/core';
import { RecommendationsComponent } from "./recommendations/recommendations.component";
import { SearchComponent } from "./search/search.component";
import { NewRecipesComponent } from "./new-recipes/new-recipes.component";
import { QuoteComponent } from "./quote/quote.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RecommendationsComponent, SearchComponent, NewRecipesComponent, QuoteComponent]
})
export class HomeComponent {

}
