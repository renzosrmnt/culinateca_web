import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  @Input() imageURL: string = ""; 
  @Input() nombre: string = ""; 
  @Input() texto: string = "";

}
