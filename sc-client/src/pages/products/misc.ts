import { CATEGORY_IDENTIFIER } from 'apis/constants'

export type TBC = {
  id: CATEGORY_IDENTIFIER;
  label: string;
}

export const buttonContainer: TBC[] = [
  {
    label: 'Fruits & Vegetables',
    id: CATEGORY_IDENTIFIER.fruit_veg
  },
  {
    label: 'Bakery, Cakes and Dairy',
    id: CATEGORY_IDENTIFIER.bakery_dairy
  },
  {
    label: 'Beverages',
    id: CATEGORY_IDENTIFIER.beverages
  },
  {
    label: 'Beauty and Hygiene',
    id: CATEGORY_IDENTIFIER.beauty_hygiene
  },
  {
    label: 'Baby Care',
    id: CATEGORY_IDENTIFIER.baby_care
  }
]
