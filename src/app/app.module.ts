import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';

import { ModalComponent } from './modal/modal.component';
import { ContactComponent } from './contact/contact.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { SicknessComponent } from './sickness/sickness.component';
import { StartComponent } from './start/start.component';
import { TherapyComponent } from './therapy/therapy.component';
import { ThoughtsComponent } from './thoughts/thoughts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    ProfilePicComponent,
    ModalComponent,
    ContactComponent,
    PageWrapperComponent,
    SicknessComponent,
    StartComponent,
    TherapyComponent,
    ThoughtsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
