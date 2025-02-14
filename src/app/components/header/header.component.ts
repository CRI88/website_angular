import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() scrollTo = new EventEmitter<string>();

  scrollToSection(section: string) {
    this.scrollTo.emit(section);  // Enviar el evento con el ID de la sección
  }
}
