import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  

  @Input() color!: string;
  @Input() label!: string;
  @Input('selectorHtml') entrada = "False";
  @Input('SelectorHero') entrada2 = "True";

  @Input() botonRecibido: any;

  @Input() botones: any;

  title = "input-decorator";
  parentMessage = "message from parent"; // <-- Nuevo atributo
}
