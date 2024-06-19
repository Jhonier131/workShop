import { Action, createReducer, on } from '@ngrx/store';
import * as carAction from './car-actions';

export const initialState = {
    carItems: [{}]
}

const methodReducer = createReducer(
    initialState,
    on(carAction.addItem, (state, { newItem }) => {
        console.log('state', state);
        const allItems = state.carItems.filter((item: any) => Object.keys(item).length && !!item);

        let deleteRepeatItems; 
        const addQuantity = allItems.map((item: any) => {
            if(item.id === newItem.id) {
                deleteRepeatItems = allItems.filter((item: any) => item.id !== newItem.id); 
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
        });

        console.log('>>>>>>>>', addQuantity, deleteRepeatItems);

        return {
            ...state,
            carItems: [...addQuantity, deleteRepeatItems]
        }
    })
)

export function carReducer(state: any | undefined, action: Action) {
    return methodReducer(state, action);
}