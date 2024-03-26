import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';
import { Navbar, Notification, Footer } from '@mf-store-apps/ui';
import Home from './home';

const Shop = React.lazy(() => import('shop/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Notification />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>

      <Footer />
    </React.Suspense>
  );
}

export default App;
