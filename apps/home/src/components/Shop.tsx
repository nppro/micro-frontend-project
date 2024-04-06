import React, { Suspense, useEffect, useRef } from 'react';
import { mount } from 'shop/Module';
import { app1RoutingPrefix, app2RoutingPrefix } from '../routing/constants';
import { useLocation, useNavigate } from 'react-router-dom';

const app1Basename = `/shop`;

//TODO: Should to create a factory patterrn it here --- to create many app based on app remotes

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // // Listen to navigation events dispatched inside app1 mfe.
  useEffect(() => {
    const app1NavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${app1Basename}${pathname}`;

      console.log(pathname);
      console.log(newPathname);

      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener('[app1] navigated', app1NavigationEventHandler);

    return () => {
      window.removeEventListener(
        '[app1] navigated',
        app1NavigationEventHandler
      );
    };
  }, [location]);

  // // Listen for shell location changes and dispatch a notification.
  useEffect(() => {
    if (location.pathname.startsWith(app1Basename)) {
      window.dispatchEvent(
        new CustomEvent('[shell] navigated', {
          detail: location.pathname.replace(app1Basename, ''),
        })
      );
    }
  }, [location]);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});
  // Mount app1 MFE
  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    unmountRef.current = mount({
      mountPoint: wrapperRef.current!,
      initialPathname: location.pathname.replace(app1Basename, ''),
    });
    isFirstRunRef.current = false;
  }, [location]);

  // FIXME: Bug here ---- should be investigated----
  // useEffect(() => unmountRef.current, []);

  return <main ref={wrapperRef} id="shop-mfe"></main>;
};
