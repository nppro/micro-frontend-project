import React, { lazy, Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { Layout } from '../app/Layout';

import Home from '../app/home';
import Shop from '../components/Shop';

const ShopLazy = lazy(() => import('../components/Shop'));

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
    ],
  },
];
