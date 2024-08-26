import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderPromocionalComponent } from './components/header-promocional/header-promocional.component';
import { MenuSectionsComponent } from './components/menu-sections/menu-sections.component';
import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import { Section3Component } from './components/section3/section3.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderPromocionalComponent,
    MenuSectionsComponent,
    Section1Component,
    Section2Component,
    Section3Component,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
