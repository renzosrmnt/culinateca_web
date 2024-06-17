import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { AboutComponent } from './components/about/about.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';



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
];
