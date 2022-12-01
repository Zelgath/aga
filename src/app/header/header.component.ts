import { Component, Output, EventEmitter } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() openModal = new EventEmitter<void>();
  faBars = faBars;

  onBarsClicked(): void {
    this.openModal.emit();
  }
}
