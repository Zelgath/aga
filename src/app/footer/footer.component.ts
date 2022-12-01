import { Component } from '@angular/core';
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  faSquarePhone = faSquarePhone;
}
