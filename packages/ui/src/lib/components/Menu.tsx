import React, { useState } from 'react';
import { AssetsImage } from '../assets/';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

export function Menu() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  const links = [
    { title: 'Home', url: '/', id: 1 },
    { title: 'Shop', url: '/shop', id: 2 },
  ];

  return (
    <>
      {!open ? (
        <img
          src={AssetsImage.open}
          className=" cursor-pointer"
          alt="Menu Open"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <img
          src={AssetsImage.close}
          alt="Close Open"
          className=" cursor-pointer"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      <ul
        className={`bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center w-full text-3xl z-10 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        } transition-all`}
      >
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.url} onClick={() => setOpen(false)}>
              {link.title}
            </Link>
          </li>
        ))}
        {!user ? (
          <li>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <li>
            <Link to="/orders">Order</Link>
          </li>
        )}
        <li>
          <CartIcon />
        </li>
      </ul>
    </>
  );
}

export default Menu;
