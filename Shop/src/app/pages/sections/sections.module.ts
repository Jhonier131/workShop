import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './containers/sections/sections.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WomensComponent } from './components/womens/womens.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

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

    ReactiveFormsModule,

    MatRadioModule,
    MatCheckboxModule
  ]
})
export class SectionsModule { }
