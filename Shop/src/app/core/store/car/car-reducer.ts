import { Action, createReducer, on } from '@ngrx/store';
import * as carAction from './car-actions';

export const initialState = {
    carItems: [{}]
}

const methodReducer = createReducer(
    initialState,
    on(carAction.addItem, (state, { newItem }) => {
        // console.log(newItem);
        
      return {
        ...state,
        carItems: [...state.carItems, newItem]
      };
    })
)

export function carReducer(state: any | undefined, action: Action) {
    return methodReducer(state, action);
}