import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import CartIcon from './CartIcon';
import AssetsImage from '../assets';

export function Navbar() {
  const [user, setUser] = useState(false);

  return (
    <nav
      className="h-12 text-red-500 p-4 flex items-center justify-between
    border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40"
    >
      <ul className="hidden md:flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {/* LOGO */}
      <div className="text-xl flex-1 md:justify-items-center md:text-center md:font-bold">
        <Link to="/">Massimo</Link>
      </div>
      {/* MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center">
        <div className="flex items-center gap-2 cursor-pointer bg-orange-300 px-2 py-1 rounded-md md:absolute md:top-3 r-2 lg:static">
          <img src={AssetsImage.phone} alt="" width={20} height={20} />
          <span>123 456 789</span>
        </div>
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/login">Order</Link>
        )}
        <CartIcon />
      </div>
    </nav>
  );
}

export default Navbar;
