import { ProductType } from '../../types/products';

export type StateType = {
  products?: ProductType;
}

export type ProductReducerType = {
  products: ProductType[];
}

export type ReducerType = {
  productReducer: ProductReducerType
}