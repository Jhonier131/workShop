import { Action, createReducer, on } from '@ngrx/store';
import * as carAction from './car-actions';

export const initialState = {
    carItems: [{}]
}

const methodReducer = createReducer(
    initialState,
    on(carAction.addItem, (state, { newItem }) => {

        const addNewItem = state.carItems.filter((item: any) => {
            if(item.id !== newItem.id) return item;
        });
        
      return {
        ...state,
        carItems: [...addNewItem, newItem]
      };
    })
)

export function carReducer(state: any | undefined, action: Action) {
    return methodReducer(state, action);
}