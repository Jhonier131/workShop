import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './containers/sections/sections.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WomensComponent } from './components/womens/womens.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SectionsComponent,
    WomensComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SectionsRoutingModule,
    SharedModule,
  ]
})
export class SectionsModule { }
