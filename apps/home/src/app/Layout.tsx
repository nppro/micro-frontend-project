import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { app1RoutingPrefix, app2RoutingPrefix } from '../routing/constants';
import { Footer, Navbar, Notification } from '@mf-store-apps/ui';

export function Layout() {
  return (
    <>
      <Notification />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
