import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderPromocionalComponent } from './components/header-promocional/header-promocional.component';
import { MenuSectionsComponent } from './components/menu-sections/menu-sections.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderPromocionalComponent,
    MenuSectionsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
