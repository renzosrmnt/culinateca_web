import { Component } from '@angular/core';
import { BannerComponent } from "../general/banner/banner.component";
import { MessageComponent } from "./message/message.component";
import { CommitmentComponent } from "./commitment/commitment.component";
import { CalledComponent } from "../general/called/called.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [BannerComponent, MessageComponent, CommitmentComponent, CalledComponent]
})
export class AboutComponent {

    bannerImg = "about.png";
    bannerNombre = "Nosotros";
    bannerTexto = "Somos una página dedicada a compartir nuestra pasión por la comida. Nos encanta explorar y probar nuevas recetas, y queremos inspirarte a que descubras y disfrutes de la cocina tanto como nosotros.";

}
