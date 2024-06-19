import { Component } from '@angular/core';
import { BannerComponent } from "../general/banner/banner.component";
import { FormComponent } from "./form/form.component";

@Component({
    selector: 'app-suggestions',
    standalone: true,
    templateUrl: './suggestions.component.html',
    styleUrl: './suggestions.component.css',
    imports: [BannerComponent, FormComponent]
})
export class SuggestionsComponent {

    bannerImg = "suggestions.png";
    bannerNombre = "Buzón";
    bannerTexto = "Puedes enviar sugerencias, hacer pedidos o compartir alguna receta. Queremos escuchar tu opinión para mejorar y ofrecerte la mejor experiencia posible.";

}
