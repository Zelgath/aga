import { Component, ViewContainerRef } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private viewContainerRef: ViewContainerRef) {}

  onModal(): void {
    const modal = this.viewContainerRef.createComponent(ModalComponent);
    modal.instance.closeModal.pipe(first()).subscribe(() => modal.destroy());
  }
}
