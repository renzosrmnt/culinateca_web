import { Component } from '@angular/core';
import { BannerComponent } from "../general/banner/banner.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [BannerComponent]
})
export class AboutComponent {

    bannerImg = "about.png";
    bannerNombre = "Nosotros";
    bannerTexto = "Somos una página dedicada a compartir nuestra pasión por la comida. Nos encanta explorar y probar nuevas recetas, y queremos inspirarte a que descubras y disfrutes de la cocina tanto como nosotros.";

}
