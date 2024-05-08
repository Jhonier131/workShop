import { createAction, props } from "@ngrx/store";

export const addItem = createAction(
    '[ADD ITEM] Adiciona item',
    props<{ newItem: any }>()
)