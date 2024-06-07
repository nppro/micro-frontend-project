import React, { lazy, Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { Layout } from '../app/Layout';

import Home from '../app/home';

// TODO:
// - Create a factory function to return a component like Shop
// - Input: appName
// - Output: component
// - How many components need to be created --- Based on Remotes Application

const ShopLazy = lazy(() => import('../components/Shop'));
// const ProductLazy = lazy(() => import('../components/Product'));
const ProductLazy = lazy(() => import('product/Module'));
const CartLazy = lazy(() => import('cart/Module'));
const AuthLazy = lazy(() => import('auth/Module'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      // {

      //   element: <Navigate to={`/${app1RoutingPrefix}`} />,
      // },
      {
        index: true,
        element: (
          <Suspense fallback="Loading App1...">
            <Home />
          </Suspense>
        ),
      },
      {
        path: `/shop/*`,
        element: (
          <Suspense fallback="Loading App2...">
            <ShopLazy />
          </Suspense>
        ),
      },
      {
        path: '/product/:id',
        element: (
          <Suspense fallback="Loading Product...">
            <ProductLazy />
          </Suspense>
        ),
      },
      {
        path: `/cart/*`,
        element: (
          <Suspense fallback="Loading Cart...">
            <CartLazy />
          </Suspense>
        ),
      },
      {
        path: `/auth/*`,
        element: (
          <Suspense fallback="Loading Auth...">
            <AuthLazy />
          </Suspense>
        ),
      },
    ],
  },
];
