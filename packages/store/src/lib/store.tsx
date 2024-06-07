import { Product } from '@mf-store-apps/models';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type CartItem = {
  product: Product;
  quantity: number;
  totalPrice: number;
  selectedOption?: { title: string; additionalPrice: number };
};

type Store = {
  cart: CartItem[];
  addToCart: (cart: CartItem) => void;
};

export const useStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        addToCart: (item) =>
          set((state) => ({ cart: state.cart.concat(item) })),
      }),
      { name: 'pizzaStore' }
    )
  )
);
