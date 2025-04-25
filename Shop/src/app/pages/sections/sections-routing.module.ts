import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomensComponent } from './components/womens/womens.component';
import { SectionsComponent } from './containers/sections/sections.component';

const routes: Routes = [
  
  {
    path: '',
    children: [
      {
        path: 'women', component: WomensComponent
      },
      {
        path: 'men', component: WomensComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
