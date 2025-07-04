import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomensComponent } from './components/womens/womens.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

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
        path: 'detail/:id', component: ItemDetailComponent
      },
      {
        path: 'checkout', pathMatch: 'full', component: CheckoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
