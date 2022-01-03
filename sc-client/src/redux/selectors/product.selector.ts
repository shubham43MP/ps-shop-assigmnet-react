import { createSelector } from 'reselect';
import { ReducerType } from 'redux/types/rootStateType';

const selectSelf = (state: ReducerType) => state.productReducer

export const selectProducts =  createSelector(
  selectSelf,
  state => state.products
)