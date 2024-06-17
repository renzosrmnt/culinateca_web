import { Component } from '@angular/core';
import { BannerComponent } from "../general/banner/banner.component";
import { ListComponent } from "./list/list.component";

@Component({
    selector: 'app-recipes',
    standalone: true,
    templateUrl: './recipes.component.html',
    styleUrl: './recipes.component.css',
    imports: [BannerComponent, ListComponent]
})
export class RecipesComponent {

    bannerImg = "comida.png";
    bannerNombre = "Recetas";
    bannerTexto = "Aquí encontrarás muchas recetas deliciosas para inspirarte y disfrutar en la cocina, desde platos tradicionales hasta nuevas creaciones que te sorprenderán.";


}
