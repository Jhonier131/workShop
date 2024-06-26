import { Action, createReducer, on } from '@ngrx/store';
import * as carAction from './car-actions';

export const initialState = {
    carItems: [{}]
}

const methodReducer = createReducer(
    initialState,
    on(carAction.addItem, (state, { newItem }) => {

        let myCartItems = [...state.carItems];
        const exist = myCartItems.filter((item: any) => {
          if(item.id === newItem.id) return item;
        });

        if(exist.length) {
          alert('Este producto ya se encuentra en el carrito')
          return {...state};
        }
        else return {
          ...state,
          carItems: [...myCartItems, newItem]
        };

    }),
    on(carAction.increment, (state, { item }) => {
        let myCartItems = [...state.carItems];

        const newItems = myCartItems.map((cartItem: any) => {
          if(cartItem.id === item.id) return {	...cartItem, quantity: cartItem.quantity + 1 };
          return cartItem;
        });

        return {
            ...state,
            carItems: [...newItems]
        };
    }),
    on(carAction.decrement, (state, { item }) => {
        let myCartItems = [...state.carItems];

        const newItems = myCartItems.map((cartItem: any) => {
          if(cartItem.id === item.id) return {	...cartItem, quantity: cartItem.quantity - 1 };
          return cartItem;
        });

        return {
            ...state,
            carItems: [...newItems]
        };
    }),
)

export function carReducer(state: any | undefined, action: Action) {
    return methodReducer(state, action);
}