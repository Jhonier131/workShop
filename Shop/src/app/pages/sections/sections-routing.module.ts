import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomensComponent } from './components/womens/womens.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  
  {
    path: '',
    children: [
      {
        path: 'women', component: WomensComponent
      },
      {
        path: 'men', component: WomensComponent
      },
      {
        path: 'checkout', component: CheckoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
