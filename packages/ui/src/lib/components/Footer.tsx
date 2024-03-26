import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <div className="h-12 md:h-24 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between">
      <Link to="/" className="font-bold text-xl">
        MASSIMO
      </Link>
      <p>&copy; ALL RIGHTS RESERVED.</p>
    </div>
  );
}

export default Footer;
