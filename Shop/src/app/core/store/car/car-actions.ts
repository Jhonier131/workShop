import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Counter Component] Increment', props<{ item: any }>());
export const decrement = createAction('[Counter Component] Decrement', props<{ item: any }>());
export const deleteItem = createAction('[Counter Component] Delete', props<{ item: any }>());

export const addItem = createAction(
    '[ADD ITEM] Adiciona item',
    props<{ newItem: any }>()
)
