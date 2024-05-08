import { createSelector } from "@ngrx/store";

export const selectFeature = (state: any) => state;

export const selectCarItems = createSelector(
    selectFeature,
    (state) => state.carrito
  );