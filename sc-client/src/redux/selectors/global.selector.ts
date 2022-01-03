import { createSelector } from 'reselect';
import { ReducerType } from 'redux/types/rootStateType';

const selectSelf = (state: ReducerType) => state.globalReducer

export const selectGlobalProductSelected =  createSelector(
  selectSelf,
  state => state.productSelected
)