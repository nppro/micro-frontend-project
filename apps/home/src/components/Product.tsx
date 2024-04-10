import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const app2Basename = '/product';

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // // Listen to navigation events dispatched inside app1 mfe.
  useEffect(() => {
    const app1NavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${app2Basename}${pathname}`;

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
    if (location.pathname.startsWith(app2Basename)) {
      window.dispatchEvent(
        new CustomEvent('[shell] navigated', {
          detail: location.pathname.replace(app2Basename, ''),
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
    console.log('try to mount product page');
    //   unmountRef.current = mount({
    //     mountPoint: wrapperRef.current!,
    //     initialPathname: location.pathname.replace(app2Basename, ''),
    //   });
    isFirstRunRef.current = false;
  }, [location]);

  // FIXME: Bug here ---- should be investigated----
  // useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="product-mfe"></div>;
};
