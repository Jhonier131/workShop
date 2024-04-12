import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './layoutComponents/navbar/navbar.component';
import { HeaderLogoComponent } from './layoutComponents/header-logo/header-logo.component';
import { FooterComponent } from './layoutComponents/footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderLogoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent,
    HeaderLogoComponent,
    FooterComponent
  ]
})
export class SharedModule { }
