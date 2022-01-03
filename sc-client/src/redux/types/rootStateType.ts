import { BannerType } from '../../types/banners';
import { CategoryType } from '../../types/category';
import { ProductType } from '../../types/products';

export type StateType = {
  products?: ProductType;
}

export type ProductReducerType = {
  products: ProductType[];
}

export type CategoryReducerType = {
  category: CategoryType[];
}

export type BannerReducerType = {
  banners: BannerType[];
}

export type ReducerType = {
  productReducer: ProductReducerType;
  categoryReducer: CategoryReducerType;
  bannerReducer: BannerReducerType;
}