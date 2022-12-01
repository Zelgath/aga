import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-therapy',
  templateUrl: './therapy.component.html',
  styleUrls: ['./therapy.component.scss'],
})
export class TherapyComponent implements AfterViewInit{

  constructor(private route: ActivatedRoute) {

  }

  ngAfterViewInit(): void {
    const {param} = this.route.snapshot.queryParams
    if(param) {
      this.handle(param);
    }
      
  }

  handle(id: string){
    document.getElementById(id)?.scrollIntoView();
  }
  
}
