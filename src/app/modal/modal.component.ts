import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output()
  closeModal = new EventEmitter<void>();

  close(): void {
    this.closeModal.emit();
  }
}
