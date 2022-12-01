import { Component, Output, EventEmitter } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output()
  closeModal = new EventEmitter<void>();
  faX = faX;

  close(): void {
    this.closeModal.emit();
  }
}
