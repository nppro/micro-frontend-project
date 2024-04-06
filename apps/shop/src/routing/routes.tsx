import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { NavigationManager } from '../components/NavigationManager';
import MenuPage from '../app/menu';
import CategoryPage from '../app/category';

export const routes = [
  {
    path: '/',
    element: (
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="Loading Menu....">
            <MenuPage />
          </Suspense>
        ),
      },
      {
        path: '/:slug',
        element: <CategoryPage />,
      },
    ],
  },
];
