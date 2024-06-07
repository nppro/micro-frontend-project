import React from 'react';
import { Link } from 'react-router-dom';
import AssetsImage from '../assets';
import { useStore } from '@mf-store-apps/store';

export function CartIcon() {
  const { cart } = useStore();
  return (
    <Link
      to="/cart"
      className="flex gap-4 md:gap-2 items-center justify-center"
    >
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <img src={AssetsImage.cart} alt="" />
      </div>
      <span>Cart ({cart.length}) </span>
    </Link>
  );
}

export default CartIcon;
