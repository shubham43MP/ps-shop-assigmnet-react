import { UserCredential } from 'firebase/auth';
import { BannerType } from 'types/banners';
import { CategoryType } from 'types/category';
import { Severity } from 'types/common.types';
import { ProductType } from 'types/products';

export type NotificationOpen = {
  open: boolean,
  alertLabel: string;
}

export type CartCount = {
  count: number;
}

export type TNotification = NotificationOpen & Severity

export type StateType = {
  products?: ProductType;
}

export type ProductReducerType = {
  products: ProductType[];
  loading: boolean;
}

export type CategoryReducerType = {
  category: CategoryType[];
}

export type BannerReducerType = {
  banners: BannerType[];
  loading: boolean;
}

export type GlobalReducerType = {
  productSelected: string | undefined; // Should be one of those enum values
  cart: Array<ProductType & CartCount>;
  enableBackdropAddCart: boolean;
  notification: TNotification;
  user: UserCredential | null;
  isLoggedIn: boolean;
}

export type ReducerType = {
  productReducer: ProductReducerType;
  categoryReducer: CategoryReducerType;
  bannerReducer: BannerReducerType;
  globalReducer: GlobalReducerType;
}