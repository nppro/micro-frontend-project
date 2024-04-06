// import { StrictMode } from 'react';
// import * as ReactDOM from 'react-dom/client';
// import App from './app/app';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createRouter } from './routing/router-factory';

import { RoutingStrategy } from './routing/type';

const mount = ({
  mountPoint,
  initialPathname,
  routingStrategy,
}: {
  mountPoint: HTMLElement;
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
}) => {
  const router = createRouter({ strategy: routingStrategy, initialPathname });
  console.log(router);
  const shopMfe = document.getElementById('shop-mfe');
  console.log(shopMfe);
  const root = createRoot(mountPoint!);
  console.log(mountPoint.DOCUMENT_NODE);
  root.render(<RouterProvider router={router} />);

  return () => queueMicrotask(() => root.unmount());
};

export { mount };
