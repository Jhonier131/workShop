import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { ActionReducer, ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import { counterReducer } from './core/store/reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

const reducers: ActionReducerMap<any> = {
  contadorCarrito: counterReducer,
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync(
    {
      keys: [
        'contadorCarrito'
      ],
      rehydrate: true
    }
  )(reducer)
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers, {metaReducers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

