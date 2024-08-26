import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as carActions from './car-actions';
import * as carSelector from './car-selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private store: Store<any>) { }

  public addNewItem(newItem: any) {
    this.store.dispatch(
      carActions.addItem({
        newItem: {...newItem, quantity: 1}
      }));
  }
  public incrementItem(item: any) {
    this.store.dispatch(
      carActions.increment({
        item: {...item}
      }));
  }

  public decrementItem(item: any) {
    this.store.dispatch(
      carActions.decrement({
        item: {...item}
      }));
  }

  public deleteItemcar(item: any) {
    this.store.dispatch(
      carActions.deleteItem({
        item: {...item}
      }));
  }

  public selectCarItems$(): Observable<[]> {
    return this.store.select(carSelector.selectCarItems);
  }
}
