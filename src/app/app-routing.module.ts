import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SicknessComponent } from './sickness/sickness.component';
import { StartComponent } from './start/start.component';
import { TherapyComponent } from './therapy/therapy.component';
import { ThoughtsComponent } from './thoughts/thoughts.component';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'terapia', component: TherapyComponent },
  { path: 'swiatopoglad', component: ThoughtsComponent },
  { path: 'omnie', component: AboutComponent },
  { path: 'zaburzenia', component: SicknessComponent },
  { path: 'kontakt', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
