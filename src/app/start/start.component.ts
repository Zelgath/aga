import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  constructor(private router: Router) {}

  navigateWithParam(param: string): void {
    this.router.navigate(['/terapia'], { queryParams: { param } });
  }
}
