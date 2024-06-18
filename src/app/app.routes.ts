import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { AboutComponent } from './components/about/about.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { DetailComponent } from './components/detail/detail.component';
import { ResultsComponent } from './components/results/results.component';



export const routes: Routes = [
    {
        path: '', //home
        title: 'Inicio',
        component: HomeComponent,
    },
    {
        path: 'recipes', //recipes
        title: 'Recetas',
        component: RecipesComponent,
    },
    {
        path: 'about', //about
        title: 'Nosotros',
        component: AboutComponent,
    },
    {
        path: 'suggestions', //suggestions
        title: 'Sugerencías',
        component: SuggestionsComponent,
    },
    {
        path: 'recipe/:id',
        title: '¡A cocinar!',
        component: DetailComponent
    },
    {
        path: 'results',
        title: 'Resultados',
        component: ResultsComponent
    },
];
