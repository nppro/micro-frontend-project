import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { app1RoutingPrefix, app2RoutingPrefix } from '../routing/constants';
import { Footer, Navbar, Notification } from '@mf-store-apps/ui';

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    // if (location.pathname.startsWith()) {
    //   window.dispatchEvent(
    //     new CustomEvent('[shell] navigated', {
    //       detail: location.pathname.replace(app1Basename, ''),
    //     })
    //   );
    // }
    console.log(location);
  }, [location]);

  return (
    <>
      <Notification />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
