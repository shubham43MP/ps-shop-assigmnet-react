import { createSelector } from 'reselect';
import { ReducerType } from 'redux/types/rootStateType';

const selectSelf = (state: ReducerType) => state.bannerReducer

export const selectBanner =  createSelector(
  selectSelf,
  state => state.banners
)