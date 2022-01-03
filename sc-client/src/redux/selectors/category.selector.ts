import { createSelector } from 'reselect';
import { ReducerType } from '../types/rootStateType';

const selectSelf = (state: ReducerType) => state.categoryReducer

export const selectCategory =  createSelector(
  selectSelf,
  state => state.category
)